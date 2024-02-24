export type MealType = 'morning' | 'lunch' | 'dinner' | 'snack'

export interface Meal {
  id: string
  title: string
  url: string
  type: MealType
}

const data: Meal[] = [
  {
    id: '1',
    title: '05.21.Morning',
    url: 'm01.jpg',
    type: 'morning',
  },
  {
    id: '2',
    title: '05.21.Lunch',
    url: 'l03.jpg',
    type: 'lunch',
  },
  {
    id: '3',
    title: '05.21.Dinner',
    url: 'd01.jpg',
    type: 'dinner',
  },
  {
    id: '4',
    title: '05.21.Snack',
    url: 'l01.jpg',
    type: 'snack',
  },
  {
    id: '5',
    title: '05.20.Morning',
    url: 'm01.jpg',
    type: 'morning',
  },
  {
    id: '6',
    title: '05.21.Lunch',
    url: 'l02.jpg',
    type: 'lunch',
  },
  {
    id: '7',
    title: '05.21.Dinner',
    url: 'd02.jpg',
    type: 'dinner',
  },
  {
    id: '8',
    title: '05.22.Dinner',
    url: 's01.jpg',
    type: 'dinner',
  },
  {
    id: '9',
    title: '05.20.Morning',
    url: 'm02.jpg',
    type: 'morning',
  },
  {
    id: '10',
    title: '05.22.Morning',
    url: 'm03.jpg',
    type: 'morning',
  },
  {
    id: '11',
    title: '05.20.Lunch',
    url: 'l01.jpg',
    type: 'lunch',
  },
  {
    id: '12',
    title: '05.21.Dinner',
    url: 'd01.jpg',
    type: 'dinner',
  },
  {
    id: '13',
    title: '05.20.Snack',
    url: 'm02.jpg',
    type: 'snack',
  },
  {
    id: '14',
    title: '05.21.Lunch',
    url: 'l02.jpg',
    type: 'lunch',
  },
  {
    id: '15',
    title: '05.21.Dinner',
    url: 'd02.jpg',
    type: 'dinner',
  },
  {
    id: '16',
    title: '05.22.Morning',
    url: 'm03.jpg',
    type: 'morning',
  },
]

export const getMeals = ({offset, type}: {offset: number; type?: MealType}) => {
  const filteredData = type ? data.filter((meal) => meal.type === type) : data

  const size = offset ? 4 : 8
  return Promise.resolve({
    data: filteredData.slice(offset, offset + size),
    offset,
    ended: offset + size >= filteredData.length,
    size,
  })
}
