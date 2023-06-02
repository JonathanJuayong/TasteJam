"use client"

import {Recipe} from "@/utils/types";
import {ReactElement, useState} from "react";
import useComponentTransition from "@/utils/hooks/useComponentTransition";
import {FormContext} from "@/components/form/FormContext";

const recipeFormInitialState: Recipe = {
  header: "",
  subheader: "",
  description: "",
  serves: 1,
  prepTime: 1,
  cookTime: 1,
  ingredients: [
    {
      name: "Main",
      items: [
        {
          name: "",
          qty: 1,
          unit: "",
          note: ""
        }
      ]
    }
  ],
  instructions: [
    {
      image: "",
      description: ""
    }
  ],
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

  const {currentElement, showPreviousElement, showNextElement, jumpTo} = useComponentTransition(components)

  return (
    <FormContext.Provider value={{
      formState,
      stateUpdateHandler: handleStateUpdate,
      showNextElement,
      showPreviousElement,
      jumpTo
    }}>
      {currentElement}
    </FormContext.Provider>
  )
}
