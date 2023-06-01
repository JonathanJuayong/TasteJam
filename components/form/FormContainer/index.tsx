"use client"

import {Recipe} from "@/utils/types";
import {ReactElement, useState} from "react";
import useComponentTransition from "@/utils/hooks/useComponentTransition";
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

interface FormContainerProps {
  components: ReactElement[]
}

export default function FormContainer({components}: FormContainerProps) {
  const [formState, setFormState] = useState(recipeFormInitialState);
  const handleStateUpdate = (stateSetter: (recipe: Recipe) => Recipe) => {
    setFormState(prev => stateSetter(prev))
  }

  const {currentElement, showPreviousElement, showNextElement} = useComponentTransition(components)

  return (
    <FormContext.Provider value={{
      formState,
      stateUpdateHandler: handleStateUpdate,
      showNextElement,
      showPreviousElement
    }}>
      {currentElement}
    </FormContext.Provider>
  )
}
