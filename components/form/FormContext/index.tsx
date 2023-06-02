import {createContext, useContext} from "react";
import {Recipe} from "@/utils/types";

type FormContextType = {
  formState?: Recipe,
  stateUpdateHandler?: (stateSetter: (recipe: Recipe) => Recipe) => void,
  showNextElement?: () => void,
  showPreviousElement?: () => void,
  jumpTo?: (index: number) => void
}

export const FormContext = createContext<FormContextType>({})

export function useRecipeFormContext() {
  const {formState, stateUpdateHandler, showPreviousElement, showNextElement, jumpTo} = useContext(FormContext);
  return {
    formState: formState!,
    stateUpdateHandler: stateUpdateHandler!,
    showPreviousElement: showPreviousElement!,
    showNextElement: showNextElement!,
    jumpTo: jumpTo!
  }
}
