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

const defaultValues: z.infer<typeof formSchema> = {
  ingredients: [
    {
      name: "",
      items: [
        {
          name: "",
          note: "",
          qty: 1,
          unit: ""
        }
      ]
    }
  ]
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
    name: mainFieldName
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
      <Stack className="gap-10">
        {fields.map((field, index, arr) => (
          <Inline justify="start" className="gap-5" key={field.id}>
            <IngredientsDialog
              control={form.control}
              index={index}
              triggerLabel={items[index] ? `Edit ${items[index]} group` : "Add new ingredient group"}
              className="flex-1"
            />
            {arr.length > 1 && (
              <Button onClick={handleDeleteItem(index)}>Delete</Button>
            )}
          </Inline>
        ))}
        <Button onClick={handleAddItem} type="button">Add</Button>
      </Stack>
    </Form>
  )
}
