import {z} from "zod";

export const ingredientItemSchema = z.object({
  name: z.string(),
  unit: z.string(),
  qty: z.number(),
  note: z.string()
})

export const ingredientGroupSchema = z.object({
  name: z.string(),
  items: z.array(ingredientItemSchema)
})

export const formSchema = z.object({
  ingredients: z.array(ingredientGroupSchema)
})
