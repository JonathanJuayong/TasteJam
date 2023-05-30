import {useForm} from "react-hook-form";
import {Dispatch, SetStateAction} from "react";
import {Instruction, Recipe} from "@/utils/types";
import AddInstructions from "@/components/form/RecipeInstructionsForm/AddInstructions";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";

export type InstructionsFormValues = {
  instructions: Instruction[]
}

interface RecipeInstructionsFormProps {
  formStateSetter: Dispatch<SetStateAction<Recipe>>
}

export default function RecipeInstructionsForm({formStateSetter}: RecipeInstructionsFormProps) {
  const {control, register, handleSubmit} = useForm<InstructionsFormValues>({
    defaultValues: {
      instructions: [
        {
          image: "",
          description: ""
        }
      ]
    }
  })
  const onSubmit = handleSubmit(data => {
    formStateSetter(prev => ({
      ...prev,
      instructions: data.instructions
    }))
  })

  return (
    <Stack gutter="6">
      <AddInstructions fieldName="instructions" control={control} register={register}/>
      <Button onClick={onSubmit}>Submit</Button>
    </Stack>
  )
}
