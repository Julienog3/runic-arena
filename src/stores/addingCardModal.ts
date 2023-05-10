import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CardPayloadType } from '@/types/card'

export const useAddingCardModalStore = defineStore('card', () => {
  const card = ref<CardPayloadType>({
    name: "",
    typeId: 1,
    description: "",
    value: 0,
    image: "",
    classId: 1,
    activeSkills: [0],
    passiveSkill: 0
  })

  function addActiveSkill() {
    card.value.activeSkills.push(0)
  }

  function $reset() {
    card.value = {
      name: "",
      typeId: 1,
      description: "",
      value: 0,
      image: "",
      classId: 1,
      activeSkills: [0],
      passiveSkill: 0
    }
  }

  return { card, $reset, addActiveSkill }
})
