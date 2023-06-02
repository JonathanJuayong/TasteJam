"use client"

import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Stack from "@/components/layout/Stack";
import Inline from "@/components/layout/Inline";
import FormTextInput from "@/components/form/primitives/FormTextInput";
import FormTextarea from "@/components/form/primitives/FormTextarea";
import FormNumberInput from "@/components/form/primitives/FormNumberInput";
import {formSchema} from "@/components/form/RecipeInfoForm/schema";
import {useRecipeFormContext} from "@/components/form/FormContext";
import {useEffect} from "react";

export default function RecipeInfoForm() {
  const {formState, stateUpdateHandler, showNextElement} = useRecipeFormContext()

  const {header, subheader, description, cookTime, prepTime, serves} = formState
  const defaultValues = {header, subheader, description, cookTime, prepTime, serves}

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues
  })

  useEffect(() => {
    form.reset(formState)
  }, [formState])

  const handleOnSubmit = form.handleSubmit(data => {
    console.log(data)
    stateUpdateHandler(prev => ({
      ...prev,
      ...data
    }))
    showNextElement()
  })

  return <Form {...form}>
    <form onSubmit={handleOnSubmit}>
      <Stack className="gap-10">
        <FormField
          control={form.control}
          name="header"
          render={({field}) => (
            <FormTextInput
              label="Recipe Name"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="subheader"
          render={({field}) => (
            <FormTextInput
              label="Recipe Subheader"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({field}) => (
            <FormTextarea
              label="Description"
              {...field}
            />
          )}
        />
        <Inline className="gap-5">
          <FormField
            control={form.control}
            name="serves"
            render={({field}) => (
              <FormNumberInput
                label="Serves"
                {...field}
              />
            )}
          />
          <FormField
            control={form.control}
            name="prepTime"
            render={({field}) => (
              <FormNumberInput
                label="Prep time"
                {...field}
              />
            )}
          />
          <FormField
            control={form.control}
            name="cookTime"
            render={({field}) => (
              <FormNumberInput
                label="Cook Time"
                {...field}
              />
            )}
          />
        </Inline>
        <Inline justify="end">
          <Button onClick={handleOnSubmit}>Next</Button>
        </Inline>
      </Stack>
    </form>
  </Form>
}
