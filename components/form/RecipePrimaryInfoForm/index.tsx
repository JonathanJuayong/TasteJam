"use client"

import {useForm} from "react-hook-form";
import Input from "@/components/form/primitives/Input";
import Stack from "@/components/layout/Stack";
import Textarea from "@/components/form/primitives/Textarea";
import Button from "@/components/ui/Button";
import React, {useEffect} from "react";
import {Recipe} from "@/utils/types";
import Inline from "@/components/layout/Inline";
import NumberInput from "@/components/form/primitives/NumberInput";
import {useRecipeFormContext} from "@/components/form/FormContext";

export default function RecipePrimaryInfoForm() {
  const {formState, stateUpdateHandler, showNextElement} = useRecipeFormContext()

  const {register, handleSubmit, reset} = useForm<Recipe>({
    defaultValues: formState
  })

  useEffect(() => {
    reset(formState)
  }, [formState])

  const onSubmit = handleSubmit(data => {
    stateUpdateHandler(prev => ({
      ...prev,
      ...data,
    }))
    showNextElement()
  })

  return (
    <form>
      <Stack gutter="10">
        <Input label="Recipe Name" {...register("header")} />
        <Input label="Subheader" {...register("subheader")} />
        <Textarea
          label="Description"
          placeholder="Write a brief description of your recipe"
          {...register("description")}
        />
        <Inline gutter="5">
          <NumberInput label="Serves" {...register("serves", {valueAsNumber: true})}/>
          <NumberInput label="Prep Time" {...register("prepTime", {valueAsNumber: true})}/>
          <NumberInput label="Cook Time" {...register("cookTime", {valueAsNumber: true})}/>
        </Inline>
        <Button onClick={onSubmit}>Next</Button>
      </Stack>
    </form>
  )
}
