<script setup lang="ts">
import { SkillTypeEnum, type SkillType } from '@/types/skill'
import { computed, ref } from 'vue'
import CardDetailsSkillCard  from './CardDetailsSkillCard.vue'

interface CardDetailsSkillListProps {
  skills: SkillType[]
}

const props = defineProps<CardDetailsSkillListProps>()

const skillCategories = [
  {
    name: SkillTypeEnum.ACTIVE,
    label: 'Actives'
  },
  {
    name: SkillTypeEnum.PASSIVE,
    label: 'Passive'
  },
]

const selectedSkillType = ref(SkillTypeEnum.ACTIVE)

const isCategorySelected = (route: string) => route === selectedSkillType.value

const currentSkills = computed(() => {
  return props.skills.filter((skill) => skill.type === selectedSkillType.value)
})
</script>

<template>
  <div>
    <ul class="border-b flex gap-4 pb-2 mb-4">
      <li @click="selectedSkillType = skill.name as SkillTypeEnum" v-for="skill in skillCategories" :key="skill.name" :class="isCategorySelected(skill.name) ? 'relative cursor-pointer text-purple-500' : 'relative cursor-pointer text-neutral-900'">
        {{ skill.label }}
        <span v-if="isCategorySelected(skill.name)" class="absolute bg-purple-500 w-full h-[2px] bottom-0 left-0 translate-y-[9px]"></span>
      </li>
    </ul>
    <ul class="flex flex-col gap-4">
      <CardDetailsSkillCard 
        v-for="skill in currentSkills" 
        :key="skill.name" 
        :skill="skill"
      />
    </ul>
  </div>
</template>
