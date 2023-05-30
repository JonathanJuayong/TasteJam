import {useForm} from "react-hook-form";
import {IngredientGroup} from "@/utils/types";
import Input from "@/components/form/primitives/Input";
import Button from "@/components/ui/Button";
import AddIngredientItems from "@/components/form/RecipeIngredientsForm/AddIngredientItems";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/Dialog";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface IngredientGroupDialogProps extends HTMLAttributes<HTMLButtonElement> {
  defaultValues: IngredientGroup
  formStateSetter: Dispatch<SetStateAction<IngredientGroup[]>>
  triggerLabel: string
  title: string
  description: string
  enableEdit?: boolean
}

export default function IngredientGroupDialog({triggerLabel, enableEdit = false, defaultValues, formStateSetter}: IngredientGroupDialogProps) {
  const {control, register, handleSubmit, reset, watch} = useForm<IngredientGroup>({
    defaultValues,
    shouldUnregister: true
  })
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = handleSubmit(data => {
    formStateSetter(prev => {
      if (enableEdit) {
        return prev.map(item => item.name === data.name ? {...item, ...data} : item )
      }

      return [...prev, {...data}]
    })
    setIsOpen(false)
  })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])

  console.log(watch())

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
