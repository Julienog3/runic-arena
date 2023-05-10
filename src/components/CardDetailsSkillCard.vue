<script setup lang="ts">
import type { SkillType } from '@/types/skill'
  
interface SkillCardProps {
  skill: SkillType
}

const props = defineProps<SkillCardProps>()

const formatSkillDescription = () => {
  return props.skill.description.replace('X', `\`${props.skill.value?.toString()}\`` ?? '')
}
</script>

<template>
  <li class="bg-neutral-200 w-full h-24 rounded-lg flex gap-6 py-3 px-6 items-center">
    <span class="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
      <font-awesome-icon class="text-red-300 text-2xl" icon="fa-solid fa-xmark" />
    </span>
    <div class="flex flex-col">
      <h4 class="font-bold text-lg">{{ skill.name }}</h4>
      <p class="prose">{{ formatSkillDescription() }}</p>
    </div>
  </li>
</template>