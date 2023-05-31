import {Control, FieldValues, useFieldArray, UseFormRegister} from "react-hook-form";
import {Instruction} from "@/utils/types";
import Stack from "@/components/layout/Stack";
import Inline from "@/components/layout/Inline";
import Input from "@/components/form/primitives/Input";
import Textarea from "@/components/form/primitives/Textarea";
import Button from "@/components/Button";
import {InstructionsFormValues} from "@/components/form/RecipeInstructionsForm";

const defaultValue: Instruction = {
  image: "",
  description: ""
}

interface AddInstructionsProps {
  control: Control<InstructionsFormValues>
  register: UseFormRegister<any>
  fieldName: string
}

const fieldName = "instructions"

export default function AddInstructions<T extends FieldValues>({control, register}: AddInstructionsProps) {
  const {fields, append, remove} = useFieldArray({
    control,
    name: fieldName
  })

  const handleAppend = () => append(defaultValue)
  const handleDelete = (index: number) => () => remove(index)

  return (
    <Stack gutter="5">
      {fields.map((field, index) => (
        <Inline align="start" gutter="4" key={field.id}>
          <Inline.Stretch>
            <Stack gutter="3">
              <Input label="Image Src" {...register(`${fieldName}.${index}.image`)} />
              <Textarea
                label="Description"

                placeholder="Describe what to do"
                {...register(`${fieldName}.${index}.description`)}
              />
            </Stack>
          </Inline.Stretch>
          <Button onClick={handleDelete(index)}>X</Button>
        </Inline>
      ))}
      <Button onClick={handleAppend}>Add Instructions</Button>
    </Stack>
  )
}
