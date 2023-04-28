<script setup lang="ts">
import type { SkillType } from '@/types/skill'
  
interface SkillCardProps {
  skill: SkillType
}

defineProps<SkillCardProps>()
</script>

<template>
  <li class="bg-neutral-200 w-full h-24 rounded-lg flex flex-col py-3 px-6 justify-center">
    <h4 class="font-bold text-lg">{{ skill.name }}</h4>
    <p class="text-neutral-500 text-sm">{{ skill.description }}</p>
  </li>
</template>