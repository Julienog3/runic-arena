<script setup lang="ts">
import { getAllSkills } from '@/services/skill.service';
import { useAddingCardModalStore } from '@/stores/addingCardModal';
import type { SkillType } from '@/types/skill';
import { computed, onMounted, ref } from 'vue';

const store = useAddingCardModalStore()

const allSkills = ref<SkillType[]>([])

const getPassiveSkills = computed(() => allSkills.value.filter((skill) => !skill.isActive))
const getActiveSkills = computed(() => allSkills.value.filter((skill) => skill.isActive))

onMounted(async () => {
  allSkills.value = await getAllSkills()
})

</script>

<template>
  <form class="absolute top-0 left-0  w-full flex flex-col items-start gap-4">
    <div class="flex flex-col justify-between w-full gap-4">
      <h2 class="text-lg font-semibold text-neutral-800">Capacités actives</h2>
      <div v-for="(skillId, index) in store.card.activeSkills" :key="index" class="flex flex-col w-full">
        <label for="type" class="mb-2">Capacité n°{{ index + 1 }}</label>
        <select 
          type="text" 
          id="type"
          v-model="store.card.activeSkills[index]"
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option v-for="skill in getActiveSkills" :key="skill.name" :value="skill.id">{{ skill.name }}</option>
        </select>
      </div>
      <span @click="store.addActiveSkill()" class="text-violet-500 font-semibold cursor-pointer">+ Ajouter une capacité</span>
      <div class="flex flex-col w-full">
        <h2 class="text-lg font-semibold text-neutral-800 mb-2">Capacité passive</h2>
        <select 
          type="text" 
          id="type"
          v-model="store.card.passiveSkill"
          class="border border-neutral-200 p-3 rounded-lg"
        >
        <option v-for="skill in getPassiveSkills" :key="skill.name" :value="skill.id">{{ skill.name }}</option>
        </select>
      </div>
    </div>
  </form>
</template>


