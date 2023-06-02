"use client"

import {z} from "zod";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import Stack from "@/components/layout/Stack";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import IngredientsDialog from "@/components/new-form/RecipeIngredientsForm/IngredientsDialog";
import Inline from "@/components/layout/Inline";
import {formSchema} from "@/components/new-form/RecipeIngredientsForm/schema";
import {ErrorMessage} from "@hookform/error-message";

const defaultValues: z.infer<typeof formSchema> = {
  ingredients: []
}

const CONSTANTS = {
  MAX_FIELD_ARRAY_LENGTH: 4
}

interface RecipeIngredientsFormProps {
}

export default function RecipeIngredientsForm({}: RecipeIngredientsFormProps) {
  const mainFieldName = "ingredients" as const

  const {formState, stateUpdateHandler, showPreviousElement, showNextElement} = useRecipeFormContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues
  })

  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: mainFieldName,
    rules: {
      maxLength: CONSTANTS.MAX_FIELD_ARRAY_LENGTH
    }
  })

  const {errors} = form.formState

  const handleAddItem = () => append({
    name: "",
    items: [
      {
        name: "",
        note: "",
        qty: 1,
        unit: ""
      }
    ]
  })

  const handleDeleteItem = (index: number) => () => remove(index)

  const handleOnSubmit = form.handleSubmit(data => {
    console.log(data)
  })

  useEffect(() => {
    const newFieldNames = fields.map(({name}, index) => `${mainFieldName}.${index}.name` as const)
    setFieldNames(newFieldNames)
  }, [fields])

  return (
    <Form {...form}>
      <form onSubmit={handleOnSubmit}>
        <Stack className="gap-10">
          {fields.map((field, index, arr) => (
            <Card key={field.id}>
              <CardContent className="relative">
                {arr.length > 1 && (
                  <Button
                    variant="ghost"
                    className="absolute right-0 top-1 rounded-full h-10 w-10 p-1"
                    onClick={handleDeleteItem(index)} type="button"
                  >
                    <X className="h-4 w-4"/>
                  </Button>
                )}
                <CardHeader>
                </CardHeader>
                <AddIngredientsField control={form.control} index={index}/>
              </CardContent>
            </Card>
          ))}
          {fields.length < CONSTANTS.MAX_FIELD_ARRAY_LENGTH && (
            <Button variant="secondary" onClick={handleAddItem} type="button">Add Ingredient Group</Button>
          )}
          <Button type="submit">Submit</Button>
        </Stack>
        <ErrorMessage
          name={mainFieldName}
          errors={errors}
          render={({message}) => <p>{message}</p>}
        />
      </form>
    </Form>
  )
}
