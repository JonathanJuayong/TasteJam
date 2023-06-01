import {z} from "zod";

const CONSTANTS = {
  MIN_NAME_LENGTH: 1,
  MAX_NOTE_LENGTH: 60,
  MAX_QTY_LIMIT: 100
}

export const ingredientItemSchema = z.object({
  name: z.string().min(CONSTANTS.MIN_NAME_LENGTH, {
    message: "Ingredient name cannot be empty"
  }),
  unit: z.string().min(CONSTANTS.MIN_NAME_LENGTH, {
    message: "Ingredient name cannot be empty"
  }),
  qty: z.number()
    .gt(0, {
      message: "Qty must be greater than 0"
    })
    .lte(CONSTANTS.MAX_QTY_LIMIT, {
      message: `Qty must not be greater than ${CONSTANTS.MAX_QTY_LIMIT}`
    }),
  note: z.string()
    .max(CONSTANTS.MAX_NOTE_LENGTH, {
      message: "Note cannot exceed 100 characters"
    })
})

export const ingredientGroupSchema = z.object({
  name: z.string().min(CONSTANTS.MIN_NAME_LENGTH, {
    message: "Ingredient group name cannot be empty"
  }),
  items: z.array(ingredientItemSchema).min(1)
})

export const formSchema = z.object({
  ingredients: z.array(ingredientGroupSchema).min(1).refine(groups => {
    const groupNames = groups.map(group => group.name)
    return new Set(groupNames).size === groups.length
  }, {
    message: "Group names must not have any duplicates"
  })
})
