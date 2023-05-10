<script setup lang="ts">
  import { ref } from 'vue';
  import AppModal from '@/components/modals/AppModal.vue';
  import type { SkillType } from '@/types/skill';
  import { createSkill } from '@/services/skill.service';

  interface AddingModalProps {
    title: string
    closeModal: () => void
  }

  defineProps<AddingModalProps>()

  const skill = ref<SkillType>({
    id: 0,
    name: '',
    description: '',
    isActive: false,
    isPercentage: false
  })

</script>

<template>
  <AppModal 
    :title="title"
    :close-modal="() => closeModal()"
  >
  <template #body>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="name" class="block mb-2 font-medium text-gray-900 dark:text-dark">Nom</label>
        <input type="text" v-model="skill.name" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Le nom" required>
      </div>
      <div>
        <label for="valeur" class="block mb-2 font-medium text-gray-900 dark:text-dark">Valeur</label>
        <input type="number" v-model="skill.value" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="La valeur" required>
      </div>
    </div>
    <div class="grid mb-4 md:grid-cols-1">
      <label for="description" class="block mb-2 font-medium text-gray-900 dark:text-dark">Description</label>
      <textarea 
        name="" 
        id="description"
        cols="30" 
        rows="10"
        v-model="skill.description"
        placeholder="Ecrivez la description de la carte"
        class="border border-neutral-200 h-32 p-3 rounded-lg focus:border-violet-500"
      ></textarea>
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-1"> 
            
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-1"> 
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model=skill.isPercentage class="sr-only peer">
        <div class="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-500"></div>
        <span class="ml-2 font-medium text-dark-900 dark:text-dark-300">La valeur est en poucentage</span>
      </label>
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
      <div>
        <label for="runic" class="flex items-center gap-2 mb-2 font-medium text-neutral-900 dark:text-dark">
          <span class="relative flex w-4 h-4 rounded-full bg-red-500 border-4 border-red-200"/> 
          Coût runique Rouge
        </label>
        <input type="number" v-model="skill.red" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique rouge">
      </div>
      <div>
        <label for="runic" class="flex items-center gap-2 mb-2 font-medium text-neutral-900 dark:text-dark">
          <span class="relative flex w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-200"/> 
          Coût runique Bleu
        </label>
        <input type="number" v-model="skill.blue" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique bleue">
      </div>
      <div>
        <label for="runic" class="flex items-center gap-2 mb-2 font-medium text-neutral-900 dark:text-dark">
          <span class="relative flex w-4 h-4 rounded-full bg-yellow-500 border-4 border-yellow-200"/> 
          Coût runique Jaune
        </label>
        <input type="number" v-model="skill.yellow" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique jaune">
      </div>
    </div>
    <div class="grid gap-6 mb-6"> 
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model=skill.isActive class="sr-only peer">
        <div class="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-500"></div>
        <span class="ml-2 font-medium text-dark-900 dark:text-dark-300">La capacité est active</span>
      </label>     
    </div>
    </template>
    <template #footer>
      <div class="flex w-full justify-end border-t p-4">
      <div class="flex gap-4">
        <button @click="createSkill(skill)" class="bg-violet-600 font-medium text-white text-md px-12 py-3 rounded-lg">Ajouter la capacité</button>
      </div>
    </div>
    </template>
  </AppModal>
</template>