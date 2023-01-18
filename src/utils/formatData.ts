import { Dish, FormatDish } from '@/types'

export const formatDishData = (arr: Dish[]) => {
  let newArr: FormatDish[] = []
  arr.forEach((d) => {
    const filterArr = newArr.filter((i) => i.name === d.restaurant)
    if (filterArr.length > 0) {
      filterArr?.[0].item.push({
        name: d.name,
        count: 0,
      })
    } else {
      newArr.push({
        name: d.restaurant,
        item: [
          {
            name: d.name,
            count: 0,
          },
        ],
      })
    }
  })
  return newArr
}
