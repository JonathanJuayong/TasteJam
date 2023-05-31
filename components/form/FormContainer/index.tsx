"use client"

import {Recipe} from "@/utils/types";
import {useState} from "react";
import RecipePrimaryInfoForm from "@/components/form/RecipePrimaryInfoForm";
import RecipeIngredientsForm from "@/components/form/RecipeIngredientsForm";
import RecipeInstructionsForm from "@/components/form/RecipeInstructionsForm";
import useElementTransition from "@/utils/hooks/useElementTransition";
import Stack from "@/components/layout/Stack";
import {FormContext} from "@/components/form/FormContext";

const recipeFormInitialState: Recipe = {
  header: "",
  subheader: "",
  description: "",
  serves: 0,
  prepTime: 0,
  cookTime: 0,
  ingredients: [],
  instructions: [],
  author: "",
  images: [],
  equipment: [],
  allergens: [],
}

export default function FormContainer() {
  const [formState, setFormState] = useState(recipeFormInitialState);
  const handleStateUpdate = (stateSetter: (recipe: Recipe) => Recipe) => {
    setFormState(prev => stateSetter(prev))
  }

  const {currentElement, showPreviousElement, showNextElement} = useElementTransition([
    // IDE warning if I don't put in a key
    <RecipePrimaryInfoForm key={0}/>,
    <RecipeIngredientsForm key={1}/>,
    <RecipeInstructionsForm key={2}/>,
  ])

  return (
    <FormContext.Provider value={{
      formState,
      stateUpdateHandler: handleStateUpdate,
      showNextElement,
      showPreviousElement
    }}>
      <Stack gutter="5">
        {currentElement}
      </Stack>
    </FormContext.Provider>
  )
}
