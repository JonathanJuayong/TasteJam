"use client"

import {useRecipeFormContext} from "@/components/form/FormContext";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Stack from "@/components/layout/Stack";
import SmallHeaderText from "@/components/ui/SmallHeaderText";
import {Button} from "@/components/ui/button";
import {Edit} from "lucide-react";
import {Separator} from "@/components/ui/separator";

export default function RecipeIngredientsSummaryCard() {
  const {formState, jumpTo} = useRecipeFormContext()
  const {ingredients} = formState

  const handleJumpTo = (index: number) => () => jumpTo(index)

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Ingredients</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack as="article" className="gap-5">
          {ingredients.map((group, index) => (
            <Stack className="gap-5" key={index}>
              {index > 0 && <Separator className="my-5"/>}
              <section>
                <SmallHeaderText text="Ingredient Group Name"/>
                <p>{group.name}</p>
              </section>
              <section>
                <SmallHeaderText text="Items"/>
                <ul className="ml-5">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="list-disc">
                      <p>{`${item.qty} ${item.unit} of ${item.name} ${item.note.trim().length > 0 ? `(${item.note})` : ""}`}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Stack>
          ))}
        </Stack>
      </CardContent>
      <Button
        onClick={handleJumpTo(1)}
        variant="ghost"
        className="absolute top-2 right-2"
      >
        <Edit className="w-4 h-4"/>
      </Button>
    </Card>
  )
}
