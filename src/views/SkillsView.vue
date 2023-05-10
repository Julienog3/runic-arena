<script setup lang="ts">
  import AddingSkillModal from '@/components/modals/adding-modal/AddingSkillModal.vue';
  import SkillCard from '@/components/skill-view/SkillCard.vue';
  import { getAllSkills } from '@/services/skill.service';
  import type { SkillType } from '@/types/skill';
  import { onMounted, ref } from 'vue';

  const skills = ref<SkillType[]>([])
  
  const isAddingSkillModalOpened = ref<boolean>(false)

  onMounted(async (): Promise<void> => {
    skills.value = await getAllSkills()
  })

</script>

<template>
  <AddingSkillModal
    v-show="isAddingSkillModalOpened"
    title="Ajout d'une capacité"
    :close-modal="() => isAddingSkillModalOpened = false"
  />
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8 h-screen w-full overflow-y-scroll">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl text-neutral-900 mb-2">Runic arena</h1>
          <h2 class="text-xl text-neutral-400 mb-6">Liste des capacités</h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <article @click="isAddingSkillModalOpened = true" class="rounded-lg flex items-center justify-center border border-dashed border-neutral-300 min-h-40 p-8 bg-white cursor-pointer text-neutral-300 hover:text-violet-500 hover:border-violet-500 transition-colors">
          <div class="flex items-center gap-4">
            <font-awesome-icon class="text-3xl " icon="fa-solid fa-plus" />
            <h3 class="text-xl font-normal">Ajouter une capacité</h3>
          </div>
        </article>
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill"/>
      </div>
    </div>
  </main>
</template>

<style></style>
