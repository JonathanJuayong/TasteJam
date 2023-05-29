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
    // convert from string to number
    const {serves, prepTime, cookTime} = data
    const parsedAsNumber = {
      serves: Number(serves),
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
    }

    formStateSetter(prev => ({
      ...prev,
      ...data,
      ...parsedAsNumber
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
          <NumberInput label="Serves" {...register("serves")}/>
          <NumberInput label="Prep Time" {...register("prepTime")}/>
          <NumberInput label="Cook Time" {...register("cookTime")}/>
        </Inline>
        <Button onClick={onSubmit}>Submit</Button>
      </Stack>
    </form>
  )
}
