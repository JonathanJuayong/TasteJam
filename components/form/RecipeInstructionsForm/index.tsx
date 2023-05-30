import {useForm} from "react-hook-form";
import {Instruction} from "@/utils/types";
import AddInstructions from "@/components/form/RecipeInstructionsForm/AddInstructions";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import {useEffect} from "react";
import {useRecipeFormContext} from "@/components/form/FormContext";

export type InstructionsFormValues = {
  instructions: Instruction[]
}

export default function RecipeInstructionsForm() {
  const {formState, stateUpdateHandler} = useRecipeFormContext()

  const {control, register, handleSubmit, reset} = useForm<InstructionsFormValues>({
    defaultValues: {
      instructions: formState.instructions
    }
  })

  useEffect(() => {
    reset(formState)
  }, [formState])

  const onSubmit = handleSubmit(data => {
    stateUpdateHandler(prev => ({
      ...prev,
      instructions: data.instructions
    }))
  })

  return (
    <form onSubmit={onSubmit}>
      <Stack gutter="6">
        <AddInstructions fieldName="instructions" control={control} register={register}/>
        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </form>
  )
}
