import type { CardType, CategoryEnum, TypeEnum } from "@/types/card"

const API_ENDPOINT = 'http://localhost:3000'

const getCardType = async (id: number): Promise<TypeEnum> => {
  return await fetch(`${API_ENDPOINT}/types/${id}`)
    .then(res => res.json())
    .then(data => data.name as TypeEnum)
}

const getCardCategory = async (id: number): Promise<CategoryEnum> => {
  return await fetch(`${API_ENDPOINT}/classes/${id}`)
    .then(res => res.json())
    .then(data => data.name as CategoryEnum)
}

// const getCardSkills = async (id: number): Promise<CategoryEnum> => {
//   return await fetch(`${API_ENDPOINT}/classes/${id}`)
//     .then(res => res.json())
//     .then(data => data.name as CategoryEnum)
// }

export const getAllCards = async () => {
  let cards = await fetch(`${API_ENDPOINT}/cards`, {
    method: 'GET'
  }).then(res => res.json())

  cards = await Promise.all(cards.map(async (card: CardType) => {
    return { 
      ...card,
      type: await getCardType(card.typeId),
      category: await getCardCategory(card.classId)
    }
  }))

  return cards
}