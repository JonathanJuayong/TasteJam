import {useForm} from "react-hook-form";
import {Instruction} from "@/utils/types";
import AddInstructions from "@/components/form/RecipeInstructionsForm/AddInstructions";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import {FormEvent, useEffect} from "react";
import {useRecipeFormContext} from "@/components/form/FormContext";
import Inline from "@/components/layout/Inline";

export type InstructionsFormValues = {
  instructions: Instruction[]
}

export default function RecipeInstructionsForm() {
  const {formState, stateUpdateHandler, showPreviousElement, showNextElement} = useRecipeFormContext()

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

  const handleShowPrevious = (e: FormEvent<HTMLElement>) => {
    onSubmit(e).then(() => showPreviousElement())
  }

  const handleShowNext = (e: FormEvent<HTMLElement>) => {
    onSubmit(e).then(() => showNextElement())
  }

  return (
    <form>
      <Stack gutter="6">
        <AddInstructions fieldName="instructions" control={control} register={register}/>
        <Inline>
          <Button onClick={handleShowPrevious}>Prev</Button>
          <Button onClick={handleShowNext}>Next</Button>
        </Inline>
      </Stack>
    </form>
  )
}
