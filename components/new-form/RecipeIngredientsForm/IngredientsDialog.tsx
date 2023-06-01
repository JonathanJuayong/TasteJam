import {Control, useFieldArray} from "react-hook-form";
import {z} from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Stack from "@/components/layout/Stack";
import {FormField} from "@/components/ui/form";
import FormTextInput from "@/components/new-form/primitives/FormTextInput";
import Inline from "@/components/layout/Inline";
import {Separator} from "@/components/ui/separator";
import FormNumberInput from "@/components/new-form/primitives/FormNumberInput";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";
import {HTMLAttributes, useState} from "react";
import {formSchema} from "@/components/new-form/RecipeIngredientsForm/schema";

interface AddIngredientsDialogProps extends HTMLAttributes<HTMLElement> {
  control: Control<z.infer<typeof formSchema>>
  index: number
  triggerLabel: string
}

export default function IngredientsDialog(
  {
    control,
    index,
    triggerLabel,
    triggerVariant,
    className,
  }: AddIngredientsDialogProps
) {
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

  const [isOpen, setIsOpen] = useState(true);

  const handleDeleteItem = (index: number) => () => remove(index)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className} type="button">
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
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
          <Stack className="gap-5 max-h-64 overflow-y-scroll">
            {fields.map((field, idx) => (
              <Inline key={field.id} className="gap-5 relative">
                <Stack className="gap-5">
                  {idx > 0 && (<Separator className="my-5"/>)}
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
                    variant="destructive"
                    className={cn(
                      "absolute p-[2px] h-4 w-4 right-0 rounded-full",
                      idx > 0 ? "top-14" : "top-0"
                    )}
                    onClick={handleDeleteItem(idx)}
                  >
                    <X className=""/>
                  </Button>
                )}
              </Inline>
            ))}
          </Stack>
          <Button onClick={handleAddItem} type="button">Add new ingredient</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
