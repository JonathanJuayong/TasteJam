"use client"

import {useFieldArray, useForm} from "react-hook-form";
import {z} from "zod";
import {formSchema} from "@/components/new-form/RecipeInstructionsForm/schema";
import {Form, FormField} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import Stack from "@/components/layout/Stack";
import FormTextInput from "@/components/new-form/primitives/FormTextInput";
import FormTextArea from "@/components/new-form/primitives/FormTextarea";
import {Button} from "@/components/ui/button";
import {useRecipeFormContext} from "@/components/form/FormContext";
import Inline from "@/components/layout/Inline";
import {useEffect} from "react";
import {PlusCircle, X} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

const defaultValues: z.infer<typeof formSchema> = {
  instructions: []
}

interface RecipeInstructionsFormProps {
}

export default function RecipeInstructionsForm({}: RecipeInstructionsFormProps) {
  const mainFieldName = "instructions"

  const {formState, stateUpdateHandler, showPreviousElement, showNextElement} = useRecipeFormContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues
  })

  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: mainFieldName
  })

  const handleUpdateState = (data: z.infer<typeof formSchema>) => {
    stateUpdateHandler(prev => ({
      ...prev,
      ...data
    }))
  }

  const handleShowPrevious = form.handleSubmit(data => {
    handleUpdateState(data)
    showPreviousElement()
  })

  const handleShowNext = form.handleSubmit(data => {
    handleUpdateState(data)
    showNextElement()
  })

  const handleAddItem = () => append({
    image: "",
    description: ""
  })

  const handleDeleteItem = (index: number) => () => remove(index)

  useEffect(() => {
    form.reset(formState)
  }, [formState])

  return (
    <Form {...form}>
      <form>
        <Stack className="gap-10">
          {fields.map((field, index, arr) => (
            <Card key={field.id}>
              <CardContent className="relative">
                <CardHeader className="px-0">
                  Step # {index + 1}
                </CardHeader>
                <Stack key={field.id} className="gap-5">
                  <FormField
                    control={form.control}
                    name={`${mainFieldName}.${index}.image`}
                    render={({field: f}) => (
                      <FormTextInput label="Image Src" {...f}/>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`${mainFieldName}.${index}.description`}
                    render={({field: f}) => (
                      <FormTextArea label="Description" {...f}/>
                    )}
                  />
                </Stack>
                <CardFooter>
                </CardFooter>
                {arr.length > 1 && (
                  <Button
                    variant="ghost"
                    className="absolute right-0 top-1 rounded-full h-10 w-10 p-1"
                    onClick={handleDeleteItem(index)} type="button"
                  >
                    <X className="h-4 w-4"/>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          <Button variant="ghost" onClick={handleAddItem} type="button"><PlusCircle/></Button>
          <Inline>
            <Button onClick={handleShowPrevious} type="button">Prev</Button>
            <Button onClick={handleShowNext} type="button">Next</Button>
          </Inline>
        </Stack>
      </form>
    </Form>
  )
}
