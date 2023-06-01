import * as z from "zod";

const CONSTANTS = {
  MIN_CHAR: 5,
  MAX_HEADER_LIMIT: 50,
  MAX_SUBHEADER_LIMIT: 80,
  MAX_DESCRIPTION_LIMIT: 120,
  MAX_SERVES_LIMIT: 100,
  MAX_PREP_TIME_LIMIT: 100,
  MAX_COOK_TIME_LIMIT: 100
}

export const formSchema = z.object({
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
      message: `${CONSTANTS.MAX_COOK_TIME_LIMIT}`
    })
  ,
})
