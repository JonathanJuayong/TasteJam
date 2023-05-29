"use client"

import {useForm} from "react-hook-form";
import Input from "@/components/form/primitives/Input";
import Stack from "@/components/layout/Stack";
import Textarea from "@/components/form/primitives/Textarea";
import Button from "@/components/ui/Button";
import React, {Dispatch, SetStateAction} from "react";
import {Recipe} from "@/utils/types";
import Inline from "@/components/layout/Inline";
import NumberInput from "@/components/form/primitives/NumberInput";

interface RecipePrimaryInfoFormProps {
  formStateSetter: Dispatch<SetStateAction<Recipe>>
}

export default function RecipePrimaryInfoForm({formStateSetter}: RecipePrimaryInfoFormProps) {
  const {register, handleSubmit} = useForm<Recipe>()

  const onSubmit = handleSubmit(data => {
    formStateSetter(prev => ({
      ...prev,
      ...data,
    }))
  })

  return (
    <form onSubmit={onSubmit}>
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
        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </form>
  )
}
