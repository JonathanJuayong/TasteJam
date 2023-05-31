import {FormEvent, useState} from "react";
import {IngredientGroup} from "@/utils/types";
import Stack from "@/components/layout/Stack";
import IngredientGroupDialog from "@/components/form/RecipeIngredientsForm/IngredientGroupDialog";
import Inline from "@/components/layout/Inline";
import Button from "@/components/Button";
import {useRecipeFormContext} from "@/components/form/FormContext";

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

export default function RecipeIngredientsForm() {
  const {formState, stateUpdateHandler, showPreviousElement, showNextElement} = useRecipeFormContext()

  const [ingredientGroups, setIngredientGroups] = useState<IngredientGroup[]>(formState.ingredients);
  const handleDelete = (name: string) => () => {
    setIngredientGroups(prev => prev.filter(item => item.name !== name))
  }

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    stateUpdateHandler(prev => ({
      ...prev,
      ingredients: ingredientGroups
    }))
  }

  const handleShowPrevious = (e: FormEvent<HTMLElement>) => {
    handleSubmit(e)
    showPreviousElement()
  }

  const handleShowNext = (e: FormEvent<HTMLElement>) => {
    handleSubmit(e)
    showNextElement()
  }

  return (
    <form>
      <Stack gutter="10">
        {ingredientGroups.map((data) => (
          <Stack key={`${data.name}`}>
            <Inline gutter="5">
              <Inline.Stretch>
                <IngredientGroupDialog
                  title={`Edit Group ${data.name}`}
                  description=""
                  triggerLabel={`Edit Group ${data.name}`}
                  defaultValues={data}
                  formStateSetter={setIngredientGroups}
                  enableEdit
                />
              </Inline.Stretch>
              <Button onClick={handleDelete(data.name)}>X</Button>
            </Inline>
          </Stack>
        ))}
        {ingredientGroups.length < GROUP_LENGTH_LIMIT && (
          <IngredientGroupDialog
            title="Create Ingredient Group"
            description=""
            triggerLabel="Add Ingredient Group"
            defaultValues={defaultValues}
            formStateSetter={setIngredientGroups}
          />
        )}
        <Inline>
          <Button onClick={handleShowPrevious}>Prev</Button>
          <Button onClick={handleShowNext}>Next</Button>
        </Inline>
      </Stack>
    </form>
  )
}
