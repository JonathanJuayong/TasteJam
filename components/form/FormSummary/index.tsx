"use client"

import {useRecipeFormContext} from "@/components/form/FormContext";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Stack from "@/components/layout/Stack";

interface FormSummaryProps {
}

export default function FormSummary({}: FormSummaryProps) {
  const {formState, jumpTo} = useRecipeFormContext()

  const handleJumpTo = (index: number) => () => jumpTo(index)

  const {
    header,
    subheader,
    description,
    serves,
    prepTime,
    cookTime,
    ingredients,
    instructions
  } = formState
  return (
    <div>
      <h1>Summary</h1>
      <Separator className="my-5"/>
      <Stack className="gap-5">
        <ul>
          <li>Recipe name: {header}</li>
          <li>Subheader: {subheader}</li>
          <li>Description: {description}</li>
          <li>Serves: {serves}</li>
          <li>Prep Time (mins): {prepTime}</li>
          <li>Cook Time (mins): {cookTime}</li>
        </ul>
        <Button onClick={handleJumpTo(0)}>Edit</Button>
      </Stack>
      <Separator className="my-5"/>
      <Stack>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredientGroup, index) => (
            <li key={index}>
              <p>{ingredientGroup.name}</p>
              <ul>
                {ingredientGroup.items.map((item, idx) => (
                  <li key={idx}>
                    <ul>
                      <li>Name: {item.name}</li>
                      <li>Unit: {item.unit}</li>
                      <li>Qty: {item.qty}</li>
                      <li>Note: {item.note}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Button onClick={handleJumpTo(1)}>Edit</Button>
      </Stack>
      <Separator className="my-5" />
      <Stack className="my-5">
        <h2>Instructions</h2>
        <ul>
          {instructions.map(((instruction, idx) => (
            <li key={idx}>
              <ul>
                <li>
                  Image src: {instruction.image}
                </li>
                <li>
                  Description: {instruction.description}
                </li>
              </ul>
            </li>
          )))}
        </ul>
        <Button onClick={handleJumpTo(2)}>Edit</Button>
      </Stack>
    </div>
  )
}
