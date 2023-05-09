import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type CardType, CategoryEnum, TypeEnum } from '@/types/card'

export const useAddingCardModalStore = defineStore('card', () => {
  const card = ref<CardType>({
    name: "",
    type: TypeEnum.CHAOS,
    description: "",
    power: 0,
    illustration: "",
    category: CategoryEnum.ARCHER,
    skills: []
  })

  function $reset() {
    card.value = {
      name: "",
      type: TypeEnum.CHAOS,
      description: "",
      power: 0,
      illustration: "",
      category: CategoryEnum.ARCHER,
      skills: []
    }
  }

  return { card, $reset }
})
