<script setup lang="ts">
import SkillsDropdown from '@/components/modals/adding-modal/SkillsDropdown.vue';
import { SkillTypeEnum, type SkillType } from '@/types/skill';
import { ref } from 'vue';

interface CardSkillsFormProps {
  skills: SkillType[]
}

const activeSkills = ref<SkillType[]>([
  {
    name: "Critique",
    description: "Double les dommages des X prochaines attaques",
    type: SkillTypeEnum.ACTIVE,
  },
])


const props = defineProps<CardSkillsFormProps>()
</script>

<template>
  <form class="absolute top-0 left-0  w-full flex flex-col items-start gap-4">
    <div class="flex flex-col justify-between w-full gap-4">
      <h2 class="text-lg font-semibold text-neutral-800">Capacités actives</h2>
      <SkillsDropdown :skills="activeSkills" />
      <div v-for="skill in activeSkills" :key="skill.name" class="flex flex-col w-full">
        <label for="type" class="mb-2">Capacité n°1</label>
        <select 
          type="text" 
          id="type"
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option value="chaos" selected>Chaos</option>
          <option value="halo">Halo</option>
        </select>
      </div>d
      <span class="text-violet-500 font-semibold cursor-pointer">+ Ajouter une capacité</span>
      <div class="flex flex-col w-full">
        <h2 class="text-lg font-semibold text-neutral-800">Capacité passive</h2>
        <label for="type" class="mb-2">Type</label>
        <select 
          type="text" 
          id="type"
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option value="chaos" selected>Chaos</option>
          <option value="halo">Halo</option>
        </select>
      </div>
    </div>
  </form>
</template>


