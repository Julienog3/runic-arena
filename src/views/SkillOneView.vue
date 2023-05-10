<script setup lang="ts">
  import AppButton from '@/components/utils/AppButton.vue'
  import { editSkill } from '@/services/skill.service';
  import { getOneSkill } from '@/services/skill.service';
  import { deleteSkill } from '@/services/skill.service';
  import type { SkillType } from '@/types/skill';
import { number } from '@intlify/core-base';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const skill = ref<SkillType[]>([])
  
  const isAddingModalOpened = ref<boolean>(false)

  const route = useRoute();
  const id = route.params.id;

  const isModalOpened = ref(false)

  onMounted(async (): Promise<void> => {
    skill.value = await getOneSkill(+id)
  })
</script>

<template>
  <ConfirmationModal 
    v-show="isModalOpened"
    title="Confirmation de la suppression"
    :close-modal="() => isModalOpened = false"
  />
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8 h-screen w-full overflow-y-scroll">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h1 class="font-bold text-4xl text-neutral-900 mb-2">Runic arena</h1>
          <h2 class="text-xl text-neutral-400 mb-6">Editer une capacité</h2>
        </div>
        <div class="flex gap-4">
        <AppButton :on-click="() => deleteSkill(+id)" color="red" text="trst" icon="fa-trash"/>
      </div>
      </div>
      
      <form>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Nom</label>
                  <input type="text" v-model="skill.name" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Le nom" required>
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Description</label>
                  <input type="message" v-model="skill.description" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="La description">
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3"> 
            <div>
              <label for="valeur" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Valeur</label>
              <input type="number" v-model="skill.value" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="La valeur" required>
            </div>      
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3"> 
            <div>
                <input type="checkbox" v-model=skill.isPercentage class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                <label for="percentage" class="ml-2 text-sm font-medium text-dark-900 dark:text-dark-300">La valeur est en poucentage</label>
            </div>       
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-9">
              <div>
                  <label for="runic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Coup en runique rouge</label>
                  <input type="number" v-model="skill.red" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique rouge">
              </div>
              <div>
                  <label for="runic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Coup en runique bleue</label>
                  <input type="number" v-model="skill.blue" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique bleue">
              </div>
              <div>
                  <label for="runic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Coup en runique Jaune</label>
                  <input type="number" v-model="skill.yellow" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Coup en runique jaune">
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3"> 
            <div>
                <input type="checkbox" v-model=skill.isActive class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                <label for="actif" class="ml-2 text-sm font-medium text-dark-900 dark:text-dark-300">La capacité est active</label>
            </div>       
          </div>
          <button @click="editSkill(+id, skill)" class="bg-violet-600 font-medium text-white text-md px-12 py-3 rounded-lg">Modifier</button>
      </form>
    </div>
  </main>
</template>

<style></style>

