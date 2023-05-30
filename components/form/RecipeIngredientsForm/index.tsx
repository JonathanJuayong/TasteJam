import {Dispatch, SetStateAction, useState} from "react";
import {IngredientGroup, Recipe} from "@/utils/types";
import Stack from "@/components/layout/Stack";
import IngredientGroupDialog from "@/components/form/RecipeIngredientsForm/IngredientGroupDialog";
import Inline from "@/components/layout/Inline";
import Button from "@/components/ui/Button";
import StateDebugger from "@/components/StateDebugger";

interface RecipeIngredientsFormProps {
  formStateSetter: Dispatch<SetStateAction<Recipe>>
}

const defaultValues = {
  name: "",
  items: [
    {
      name: "",
      unit: "",
      qty: 1,
      note: ""
    },
  ]
}

const GROUP_LENGTH_LIMIT = 4

export default function RecipeIngredientsForm({formStateSetter}: RecipeIngredientsFormProps) {
  const [formState, setFormState] = useState<IngredientGroup[]>([]);
  const handleDelete = (name: string) => () => {
    setFormState(prev => prev.filter(item => item.name !== name))
  }

  return (
    <>
      <Stack gutter="10">
        {formState.map((data) => (
          <Stack key={`${data.name}`}>
            <Inline>
              <IngredientGroupDialog
                triggerLabel={`Edit Group ${data.name}`}
                defaultValues={data}
                formStateSetter={setFormState}
                enableEdit
              />
              <Button onClick={handleDelete(data.name)}>X</Button>
            </Inline>
          </Stack>
        ))}
        <IngredientGroupDialog
          triggerLabel="Add Ingredient Group"
          defaultValues={defaultValues}
          formStateSetter={setFormState}
        />
        <StateDebugger state={formState}/>
      </Stack>
    </>
  )
}
