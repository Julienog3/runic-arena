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
  <li class="border border-neutral-200 bg-neutral-50 w-full max-h-max rounded-lg flex gap-6 py-6 px-6 items-center">
    <span class="min-w-[3rem] h-12 bg-neutral-800 rounded-full flex items-center justify-center">
      <font-awesome-icon class="text-red-300 text-2xl" icon="fa-solid fa-fire" />
    </span>
    <div class="flex flex-col">
      <div class="flex gap-4 items-center">
        <h4 class="font-bold text-lg">{{ skill.name }}</h4>
        <div class="flex gap-2">
          <span v-for="(_, index) in Array(skill.red).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-red-500 border-4 border-red-200"/>
          <span v-for="(_, index) in Array(skill.blue).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-200"/>
          <span v-for="(_, index) in Array(skill.yellow).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-yellow-500 border-4 border-yellow-200"/>
        </div>
      </div>
      <p class="prose">{{ formatSkillDescription() }}</p>
    </div>
  </li>
</template>