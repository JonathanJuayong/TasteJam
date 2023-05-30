import {useForm} from "react-hook-form";
import {IngredientGroup} from "@/utils/types";
import Input from "@/components/form/primitives/Input";
import Button from "@/components/ui/Button";
import AddIngredientItems from "@/components/form/RecipeIngredientsForm/AddIngredientItems";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/Dialog";
import {Dispatch, HTMLAttributes, SetStateAction, useEffect, useState} from "react";

interface IngredientGroupDialogProps extends HTMLAttributes<HTMLButtonElement> {
  defaultValues: IngredientGroup
  formStateSetter: Dispatch<SetStateAction<IngredientGroup[]>>
  triggerLabel: string
  title: string
  description: string
  enableEdit?: boolean
}

export default function IngredientGroupDialog(
  {
    defaultValues,
    formStateSetter,
    triggerLabel,
    title,
    description,
    enableEdit = false,
    className,
    ...props
  }: IngredientGroupDialogProps) {
  const {control, register, handleSubmit, reset} = useForm<IngredientGroup>({
    defaultValues,
    shouldUnregister: true
  })
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = handleSubmit(data => {
    formStateSetter(prev => {
      if (enableEdit) {
        setIsOpen(false)
        return prev.map(item => item.name === defaultValues.name ? {...item, ...data} : item)
      }
      if (prev.find(item => item.name === data.name)) {
        return prev
      } else {
        setIsOpen(false)
        return [...prev, {...data}]
      }
    })
  })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])

  const buttonText = enableEdit ? "Save Changes" : "Add Ingredient Group"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className={className} {...props}>{triggerLabel}</DialogTrigger>
      <DialogContent title={title} description={description}>
        <Input label="Ingredient Group Name" {...register("name")}/>
        <AddIngredientItems control={control} register={register}/>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </DialogContent>
    </Dialog>
  )
}
