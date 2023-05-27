"use client"

import {Recipe} from "@/utils/types";
import {useState} from "react";
import RecipeNameForm from "@/components/form/RecipeNameForm";
import StateDebugger from "@/components/StateDebugger";

const recipeFormInitialState: Recipe = {
  header: "",
  subheader: "",
  description: "",
  yield: 0,
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

  return (
    <>
      <div>
        <RecipeNameForm formStateSetter={setFormState}/>
      </div>
      <StateDebugger state={formState}/>
    </>
  )
}
