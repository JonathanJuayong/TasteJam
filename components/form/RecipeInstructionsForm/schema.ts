import {z} from "zod";

export const instructionSchema = z.object({
  image: z.string(),
  description: z.string()
})

export const formSchema = z.object({
  instructions: z.array(instructionSchema)
})
