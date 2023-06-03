import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Stack from "@/components/layout/Stack";
import Image from "next/image";
import food from "@/public/food.jpg";
import Inline from "@/components/layout/Inline";
import {Clock1, Edit, Users2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRecipeFormContext} from "@/components/form/FormContext";
import SmallHeaderText from "@/components/ui/SmallHeaderText";

export default function RecipePrimaryInfoSummaryCard() {
  const {formState, jumpTo} = useRecipeFormContext()
  const {
    header,
    subheader,
    description,
    serves,
    prepTime,
    cookTime,
  } = formState
  const getMinOrMins = (number: number) => number > 1 ? "mins" : "min"

  const handleJumpTo = (index: number) => () => jumpTo(index)
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>
          Recipe Primary Info
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Stack as="article" className="gap-5 sm:flex-row">
          <figure className="min-h-[14rem] sm:w-1/2 relative">
            <Image
              src={food}
              alt="chicken marinade"
              fill
              className="object-cover"
            />
          </figure>
          <Stack>
            <section className="pb-4">
              <SmallHeaderText text="Recipe Name"/>
              <p>{header}</p>
            </section>
            <section className="pb-4">
              <SmallHeaderText text="Subheader"/>
              <p>{subheader}</p>
            </section>
            <section className="pb-4">
              <SmallHeaderText text="Description"/>
              <p>{description}</p>
            </section>
            <Inline as="section" justify="start" className="gap-5">
              <Stack className="border p-2 rounded-md">
                <SmallHeaderText text="Serves"/>
                <Inline className="gap-2" align="center">
                  <Users2 className="w-4 h-4"/>
                  <p>{`${serves} pax`}</p>
                </Inline>
              </Stack>
              <Stack className="border p-2 rounded-md">
                <SmallHeaderText text="Prep Time"/>
                <Inline className="gap-2" align="center">
                  <Clock1 className="w-4 h-4"/>
                  <p>{`${prepTime} ${getMinOrMins(prepTime)}`}</p>
                </Inline>
              </Stack>
              <Stack className="border p-2 rounded-md">
                <SmallHeaderText text="Prep Time"/>
                <Inline className="gap-2" align="center">
                  <Clock1 className="w-4 h-4"/>
                  <p>{`${cookTime} ${getMinOrMins(cookTime)}`}</p>
                </Inline>
              </Stack>
            </Inline>
          </Stack>
        </Stack>
      </CardContent>
      <Button
        onClick={handleJumpTo(0)}
        variant="ghost"
        className="absolute top-2 right-2"
      >
        <Edit className="w-4 h-4"/>
      </Button>
    </Card>
  )
}
