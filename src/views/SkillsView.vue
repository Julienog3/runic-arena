<script setup lang="ts">
  import AddingModal from '@/components/modals/adding-modal/AddingModal.vue';
  import SkillCard from '@/components/skill-view/SkillCard.vue';
  import { getAllSkills } from '@/services/skill.service';
  import type { SkillType } from '@/types/skill';
  import { onMounted, ref } from 'vue';

  const skills = ref<SkillType[]>([])
  
  const isAddingModalOpened = ref<boolean>(false)

  onMounted(async (): Promise<void> => {
    skills.value = await getAllSkills()
  })

</script>

<template>
  <AddingModal
    v-show="isAddingModalOpened"
    title="Ajout d'une capacité"
    :close-modal="() => isAddingModalOpened = false"
  />
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8 h-screen w-full overflow-y-scroll">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl text-neutral-900 mb-2">Runic arena</h1>
          <h2 class="text-xl text-neutral-400 mb-6">Liste des capacités</h2>
        </div>
        <button @click="isAddingModalOpened = true" class="flex gap-2 items-center p-4 h-fit text-white bg-neutral-800 font-medium rounded-lg">
          <font-awesome-icon class=" mr-2" icon="fa-solid fa-plus" />
          Ajouter une capacité
        </button>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill"/>
      </div>
    </div>
  </main>
</template>

<style></style>
