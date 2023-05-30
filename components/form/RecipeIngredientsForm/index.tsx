import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {IngredientGroup, Recipe} from "@/utils/types";
import Stack from "@/components/layout/Stack";
import IngredientGroupDialog from "@/components/form/RecipeIngredientsForm/IngredientGroupDialog";
import Inline from "@/components/layout/Inline";
import Button from "@/components/ui/Button";

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

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    formStateSetter(prev => ({
      ...prev,
      ingredients: formState
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gutter="10">
        {formState.map((data) => (
          <Stack key={`${data.name}`}>
            <Inline gutter="5">
              <Inline.Stretch>
                <IngredientGroupDialog
                  title={`Edit Group ${data.name}`}
                  description=""
                  triggerLabel={`Edit Group ${data.name}`}
                  defaultValues={data}
                  formStateSetter={setFormState}
                  enableEdit
                />
              </Inline.Stretch>
              <Button onClick={handleDelete(data.name)}>X</Button>
            </Inline>
          </Stack>
        ))}
        {formState.length < GROUP_LENGTH_LIMIT && (
          <IngredientGroupDialog
            title="Create Ingredient Group"
            description=""
            triggerLabel="Add Ingredient Group"
            defaultValues={defaultValues}
            formStateSetter={setFormState}
          />
        )}
        <Button typeof="submit" onSubmit={handleSubmit}>Submit</Button>
      </Stack>
    </form>
  )
}
