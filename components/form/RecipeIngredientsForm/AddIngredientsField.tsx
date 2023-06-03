import Stack from "@/components/layout/Stack";
import {FormField} from "@/components/ui/form";
import FormTextInput from "@/components/form/primitives/FormTextInput";
import Inline from "@/components/layout/Inline";
import FormNumberInput from "@/components/form/primitives/FormNumberInput";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";
import {Control, useFieldArray} from "react-hook-form";
import {z} from "zod";
import {formSchema} from "@/components/form/RecipeIngredientsForm/schema";

interface AddIngredientsFieldProps {
  control: Control<z.infer<typeof formSchema>>
  index: number
}

export default function AddIngredientsField({control, index}: AddIngredientsFieldProps) {
  const name = `ingredients.${index}.items` as const
  const {fields, append, remove} = useFieldArray({
    control,
    name
  })

  const handleAddItem = () => append({
    name: "",
    qty: 1,
    unit: "",
    note: ""
  })

  const handleDeleteItem = (index: number) => () => remove(index)
  return (
    <Stack className="gap-10">
      <FormField
        control={control}
        name={`ingredients.${index}.name`}
        render={({field: f}) => (
          <FormTextInput
            label="Ingredient Group Name"
            {...f}
          />
        )}
      />
      <Stack className="gap-20 max-h-64 overflow-y-scroll">
        {fields.map((field, idx) => (
          <Inline key={field.id} className="gap-5 relative">
            <Stack className="gap-5">
              {/*{idx > 0 && (<Separator className="my-5"/>)}*/}
              <Inline className="gap-5">
                <FormField
                  control={control}
                  name={`${name}.${idx}.name`}
                  render={({field: f}) => (
                    <FormTextInput
                      label="Name"
                      {...f}
                    />
                  )}
                />
                <FormField
                  control={control}
                  name={`${name}.${idx}.unit`}
                  render={({field: f}) => (
                    <FormTextInput
                      label="Unit"
                      className=""
                      {...f}
                    />
                  )}
                />
                <FormField
                  control={control}
                  name={`${name}.${idx}.qty`}
                  render={({field: f}) => (
                    <FormNumberInput
                      label="Qty"
                      {...f}
                    />
                  )}
                />
              </Inline>
              <FormField
                control={control}
                name={`${name}.${idx}.note`}
                render={({field: f}) => (
                  <FormTextInput
                    label="Note"
                    {...f}
                  />
                )}
              />
            </Stack>
            {fields.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                className={cn(
                  "absolute p-[2px] h-4 w-4 right-2 rounded-full",
                  idx > 0 ? "top-0" : "top-0"
                )}
                onClick={handleDeleteItem(idx)}
              >
                <X className=""/>
              </Button>
            )}
          </Inline>
        ))}
      </Stack>
      <Button type="button" onClick={handleAddItem}>Add Ingredient</Button>
    </Stack>
  )
}
