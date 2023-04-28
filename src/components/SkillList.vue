<script setup lang="ts">
import type { SkillType } from '@/types/skill'
import { computed, ref } from 'vue'
import { SkillCategoryEnum } from './CardDetails.vue'
import SkillCard from './SkillCard.vue'

interface SkillListProps {
  skills: Record<SkillCategoryEnum, SkillType[]>
}

const props = defineProps<SkillListProps>()

const skillCategories = [
  {
    name: 'actives',
    label: 'Actives'
  },
  {
    name: 'passive',
    label: 'Passive'
  },
]

const selectedSkillCategory = ref(SkillCategoryEnum.ACTIVES)

const isCategorySelected = (route: string) => route === selectedSkillCategory.value

const currentSkills = computed(() => {
  return props.skills[selectedSkillCategory.value]
})
</script>

<template>
  <div>
    <ul class="border-b flex gap-4 pb-2 mb-4">
      <li @click="selectedSkillCategory = skill.name as SkillCategoryEnum" v-for="skill in skillCategories" :key="skill.name" :class="isCategorySelected(skill.name) ? 'relative cursor-pointer text-purple-500' : 'relative cursor-pointer text-neutral-900'">
        {{ skill.label }}
        <span v-if="isCategorySelected(skill.name)" class="absolute bg-purple-500 w-full h-[2px] bottom-0 left-0 translate-y-[9px]"></span>
      </li>
    </ul>
    <ul class="flex flex-col gap-4">
      <SkillCard 
        v-for="skill in currentSkills" 
        :key="skill.name" 
        :skill="skill"
      />
    </ul>
  </div>
</template>
