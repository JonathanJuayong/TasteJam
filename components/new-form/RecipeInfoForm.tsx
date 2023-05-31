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

const CONSTANTS = {
  MIN_CHAR: 5,
  MAX_HEADER_LIMIT: 50,
  MAX_SUBHEADER_LIMIT: 80,
  MAX_DESCRIPTION_LIMIT: 120,
  MAX_SERVES_LIMIT: 100,
  MAX_PREP_TIME_LIMIT: 100,
  MAX_COOK_TIME_LIMIT: 100
}

const formSchema = z.object({
  header: z.string()
    .min(CONSTANTS.MIN_CHAR, {
      message: `Must be at least ${CONSTANTS.MIN_CHAR} characters`
    })
    .max(CONSTANTS.MAX_HEADER_LIMIT, {
      message: `Recipe name cannot be more than ${CONSTANTS.MAX_HEADER_LIMIT} characters`
    }),
  subheader: z.string()
    .min(CONSTANTS.MIN_CHAR, {
      message: `Must be at least ${CONSTANTS.MIN_CHAR} characters`
    })
    .max(CONSTANTS.MAX_SUBHEADER_LIMIT, {
      message: `Recipe subheader cannot be more than ${CONSTANTS.MAX_SUBHEADER_LIMIT} characters`
    }),
  description: z.string()
    .min(CONSTANTS.MIN_CHAR, {
      message: `Must be at least ${CONSTANTS.MIN_CHAR} characters`
    })
    .max(CONSTANTS.MAX_DESCRIPTION_LIMIT, {
      message: `Description cannot be more than ${CONSTANTS.MAX_DESCRIPTION_LIMIT} characters`
    }),
  serves: z.coerce.number()
    .gt(0)
    .max(CONSTANTS.MAX_SERVES_LIMIT, {
      message: `Cannot be more than ${CONSTANTS.MAX_SERVES_LIMIT}`
    })
  ,
  prepTime: z.coerce.number()
    .gt(0)
    .max(CONSTANTS.MAX_PREP_TIME_LIMIT, {
      message: `Cannot be more than ${CONSTANTS.MAX_PREP_TIME_LIMIT}`
    })
  ,
  cookTime: z.coerce.number()
    .gt(0)
    .max(CONSTANTS.MAX_COOK_TIME_LIMIT, {
      message: `Cannot be more tinstall tooltip componenthan ${CONSTANTS.MAX_COOK_TIME_LIMIT}`
    })
  ,
})

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
              tooltip="Enter the name of your recipe"
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
              tooltip="Enter a subheader for your recipe"
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
              tooltip="Write a brief description for your recipe"
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
                tooltip="How many people will be able to enjoy this recipe"
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
                tooltip="Prep time in minutes"
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
                tooltip="Cook time in minutes"
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
