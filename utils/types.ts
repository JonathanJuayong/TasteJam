export interface IngredientItem {
  name: string
  unit: string
  qty: number
  note: string
}

export interface IngredientGroup {
  name: string
  items: IngredientItem[]
}

export interface Instruction {
  image: string
  description: string
}

export interface Recipe {
  header: string
  subheader: string
  description: string
  ingredients: IngredientGroup[]
  instructions: Instruction[]
  author: string
  yield: number
  prepTime: number
  cookTime: number
  images: string[]
  equipment: string[]
  allergens: string[]
}
