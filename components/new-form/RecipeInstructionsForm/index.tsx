"use client"

import {useFieldArray, useForm} from "react-hook-form";
import {z} from "zod";
import {formSchema} from "@/components/new-form/RecipeInstructionsForm/schema";
import {Form} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import Stack from "@/components/layout/Stack";
import FormTextInput from "@/components/new-form/primitives/FormTextInput";
import FormTextArea from "@/components/new-form/primitives/FormTextarea";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

const defaultValues: z.infer<typeof formSchema> = {
  instructions: []
}

interface RecipeInstructionsFormProps {
}

export default function RecipeInstructionsForm({}: RecipeInstructionsFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues
  })

  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: "instructions"
  })

  const handleSubmit = form.handleSubmit(data => {
    console.log(data)
  })

  const handleAddItem = () => append({
    image: "",
    description: ""
  })

  const handleDeleteItem = (index: number) => () => remove(index)

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit}>
        <Stack className="gap-10">
          {fields.map((field, index) => (
            <Stack key={field.id} className="gap-5">
              {index > 0 && (<Separator className="my-5" />)}
              <FormTextInput label="Image Src" {...field}/>
              <FormTextArea label="Description" {...field}/>
              <Button
                variant="destructive"
                type="button"
                onClick={handleDeleteItem(index)}
              >
                Delete
              </Button>
            </Stack>
          ))}
          <Button
            variant="secondary"
            type="button"
            onClick={handleAddItem}
          >
            Add Instruction
          </Button>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Form>
  )
}
