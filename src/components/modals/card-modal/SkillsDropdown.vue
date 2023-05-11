<script setup lang="ts">
import type { SkillType } from '@/types/skill';

  interface SkillsDropdownProps {
    skills: SkillType[]
    selectedSkill: SkillType
  }


  const props = defineProps<SkillsDropdownProps>()
</script>

<template>
  <div class="flex p">
    
  </div>
  <ul>
    <li v-for="skill in skills" :key="skill.name">test</li>
  </ul>
</template>