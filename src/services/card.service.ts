import type { CardPayloadType, CardType, CategoryEnum, TypeEnum } from "@/types/card"

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

export const deleteCard = async (id :number) => {
  await fetch(`${API_ENDPOINT}/cards/${id}`, {
    method: 'DELETE'
  })
}

export const createCard = async (card: CardPayloadType) => {
  const skillsPayload = [...card.activeSkills, card.passiveSkill].map((skill) => {
    return {
      id: skill
    }
  })

  await fetch(`${API_ENDPOINT}/cards`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: card.name,
      description: card.description,
      image: card.image,
      type:  {
        connect: {
          id: card.typeId
        }
      },
      class: {
        connect: {
          id: card.classId
        }
      },
      value: card.value,
      skills: {
        connect: skillsPayload
      }
    })
  })
}

export const editCard = async (id: number, card: CardPayloadType) => {
  const skillsPayload = [...card.activeSkills, card.passiveSkill].map((skill) => {
    return {
      id: skill
    }
  })

  await fetch(`${API_ENDPOINT}/cards/${id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: card.name,
      description: card.description,
      image: card.image,
      type:  {
        connect: {
          id: card.typeId
        }
      },
      class: {
        connect: {
          id: card.classId
        }
      },
      value: card.value,
      skills: {
        connect: skillsPayload
      }
    })
  })
}

export const generateName = async () => {
  const response = await fetch(`${API_ENDPOINT}/generatename`)
    .then((res) => res.text())
  return response
} 