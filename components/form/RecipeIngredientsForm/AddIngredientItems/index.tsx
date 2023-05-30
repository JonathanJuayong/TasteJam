import {Control, useFieldArray, UseFormRegister} from "react-hook-form";
import {IngredientGroup, IngredientItem} from "@/utils/types";
import Stack from "@/components/layout/Stack";
import Inline from "@/components/layout/Inline";
import Input from "@/components/form/primitives/Input";
import NumberInput from "@/components/form/primitives/NumberInput";
import Button from "@/components/ui/Button";

interface AddIngredientItemsProps {
  control: Control<IngredientGroup>
  register: UseFormRegister<any>
}

const fieldName = "items"
const defaultValue: IngredientItem = {
  name: "",
  note: "",
  qty: 1,
  unit: ""
};

export default function AddIngredientItems({control, register}: AddIngredientItemsProps) {
  const {fields, append, remove} = useFieldArray({
    control,
    name: fieldName
  })

  const handleDelete = (idx: number) => () => remove(idx)
  const handleAppend = () => append(defaultValue)

  return (
    <Stack gutter="10">
      {fields.map((field, index, array) => (
        <Inline key={field.id} gutter="5" align="end">
          <Input label="Item Name" {...register(`${fieldName}.${index}.name`)}/>
          <NumberInput label="Qty" {...register(`${fieldName}.${index}.qty`, {valueAsNumber: true})}/>
          <Input label="Unit" {...register(`${fieldName}.${index}.unit`)}/>
          <Input label="Note" {...register(`${fieldName}.${index}.note`)}/>
          {array.length > 1 && <Button onClick={handleDelete(index)}>Delete</Button>}
        </Inline>
      ))}
      <Button onClick={handleAppend}>Add Item</Button>
    </Stack>
  )
}
