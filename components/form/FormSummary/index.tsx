"use client"

import Stack from "@/components/layout/Stack";
import RecipePrimaryInfoSummaryCard from "@/components/form/FormSummary/RecipePrimaryInfoSummaryCard";
import RecipeIngredientsSummaryCard from "@/components/form/FormSummary/RecipeIngredientsSummaryCard";

interface FormSummaryProps {
}

export default function FormSummary({}: FormSummaryProps) {
  return (
    <Stack className="gap-5">
      <RecipePrimaryInfoSummaryCard/>
      <RecipeIngredientsSummaryCard/>
    </Stack>
  )
}
