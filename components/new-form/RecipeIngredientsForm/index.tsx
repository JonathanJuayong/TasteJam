"use client"

import {z} from "zod";
import {useFieldArray, useForm, useWatch} from "react-hook-form";
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const [fieldNames, setFieldNames] = useState<`${typeof mainFieldName}.${number}.name`[]>([`${mainFieldName}.0.name`]);

  const items = useWatch({
    control: form.control,
    name: fieldNames
  })
  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: mainFieldName,
    rules: {
      maxLength: CONSTANTS.MAX_FIELD_ARRAY_LENGTH
    }
  })

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
            <Inline justify="start" className="gap-5" key={field.id}>
              <IngredientsDialog
                control={form.control}
                index={index}
                triggerLabel={items[index] ? `Edit ${items[index]} Group` : "Add new ingredient group"}
                className="flex-1"
                onDialogClose={() => {}}
              />
              {arr.length > 1 && (
                <Button variant="destructive" onClick={handleDeleteItem(index)}>Delete</Button>
              )}
            </Inline>
          ))}
          {fields.length < CONSTANTS.MAX_FIELD_ARRAY_LENGTH && (
            <Button onClick={handleAddItem} type="button">Add</Button>
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
