import RecipeInfoForm from "@/components/form/RecipeInfoForm";
import RecipeIngredientsForm from "@/components/form/RecipeIngredientsForm";
import RecipeInstructionsForm from "@/components/form/RecipeInstructionsForm";
import FormContainer from "@/components/form/FormContainer";

export default function NewPage() {
  const components = [
    <RecipeInfoForm key={0}/>,
    <RecipeIngredientsForm key={1}/>,
    <RecipeInstructionsForm key={2}/>
  ]
  return (
    <>
      <FormContainer components={components}/>
    </>
  )
}
