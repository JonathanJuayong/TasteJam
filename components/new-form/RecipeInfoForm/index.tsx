"use client"

import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Stack from "@/components/layout/Stack";
import Inline from "@/components/layout/Inline";
import FormTextInput from "@/components/new-form/primitives/FormTextInput";
import FormTextarea from "@/components/new-form/primitives/FormTextarea";
import FormNumberInput from "@/components/new-form/primitives/FormNumberInput";
import {formSchema} from "@/components/new-form/RecipeInfoForm/schema";

const defaultValues = {
  header: "Fried Chicken",
  subheader: "The best fried chicken you will ever taste",
  description: "This recipe is imported from the middle east.",
  cookTime: 1,
  prepTime: 1,
  serves: 1,
};

export default function RecipeInfoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const handleOnSubmit = form.handleSubmit(data => {
    console.log(data)
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
        <Button onClick={handleOnSubmit}>Submit</Button>
      </Stack>
    </form>
  </Form>
}
