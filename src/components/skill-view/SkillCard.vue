<script setup lang="ts">
import { ColorEnum } from '@/types/color';
import AppChip from '../utils/AppChip.vue';
import type { SkillType } from '@/types/skill';
import { SkillTypeEnum } from '@/types/skill';

interface SkillCardProps {
  skill: SkillType
}

const props = defineProps<SkillCardProps>()

const formatSkillDescription = () => {
  return props.skill.description.replace('X', `\`${props.skill.value?.toString()}\`` ?? '')
}
</script>

<template>
  <router-link :to="`/skill/${skill.id}`" class="rounded-lg border border-neutral-300 min-h-40 p-8 bg-white">
    <div class="flex items-center justify-between border-b border-neutral-300 pb-4 mb-4">
      <div class="flex items-center gap-4">
        <font-awesome-icon class="text-neutral-300 text-3xl " icon="fa-solid fa-fire" />
        <h3 class="text-xl font-semibold text-neutral-950">{{ skill.name }}</h3>
        <div class="flex gap-2">
          <span v-for="(_, index) in Array(skill.red).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-red-500 border-4 border-red-200"/>
          <span v-for="(_, index) in Array(skill.blue).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-200"/>
          <span v-for="(_, index) in Array(skill.yellow).fill(0)" :key="index"  class="relative flex w-4 h-4 rounded-full bg-yellow-500 border-4 border-yellow-200"/>
        </div>
      </div>
      <AppChip :color="ColorEnum.SKY">{{ skill.isActive ? SkillTypeEnum.ACTIVE : SkillTypeEnum.PASSIVE }}</AppChip> 
    </div>
    <article class="prose prose-neutral">{{ formatSkillDescription() }}</article>
  </router-link>
</template>
