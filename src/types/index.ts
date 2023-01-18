export interface Result {
  dishes: Dish[]
}

export type Meal = 'breakfast' | 'lunch' | 'dinner'

export interface Dish {
  id: number
  name: string
  restaurant: string
  availableMeals: Meal[]
  count?: number
}

export interface FormatDish {
  name: string
  item: {
    name: string
    count: number
    isSelect?: boolean
  }[]
}