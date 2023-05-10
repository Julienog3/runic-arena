<script setup lang="ts">
  import AddingModal from '@/components/modals/adding-modal/AddingModal.vue';
  import SkillCard from '@/components/skill-view/SkillCard.vue';
  import { editSkill } from '@/services/skill.service';
  import { getOneSkill } from '@/services/skill.service';
  import type { SkillType } from '@/types/skill';
import { number } from '@intlify/core-base';
  import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

  const skill = ref<SkillType[]>([])
  
  const isAddingModalOpened = ref<boolean>(false)

  const route = useRoute();
  const id = route.params.id;

  onMounted(async (): Promise<void> => {
    skill.value = await getOneSkill(+id)
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
          <h2 class="text-xl text-neutral-400 mb-6">Editer une capacité</h2>
        </div>
      </div>
      
      <form>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Nom</label>
                  <input type="text" v-model="skill.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Le nom" required>
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Description</label>
                  <input type="message" v-model="skill.description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="La description">
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3"> 
            <div>
              <label for="valeur" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Valeur</label>
              <input type="number" v-model="skill.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="La valeur" required>
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
                  <input type="number" v-model="skill.red" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coup en runique rouge">
              </div>
              <div>
                  <label for="runic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Coup en runique bleue</label>
                  <input type="number" v-model="skill.blue" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coup en runique bleue">
              </div>
              <div>
                  <label for="runic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Coup en runique Jaune</label>
                  <input type="number" v-model="skill.yellow" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coup en runique jaune">
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3"> 
            <div>
                <input type="checkbox" v-model=skill.isActive class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                <label for="actif" class="ml-2 text-sm font-medium text-dark-900 dark:text-dark-300">La capacité est active</label>
            </div>       
          </div>
          <button @click="editSkill(+id, skill)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
      </form>
    </div>
  </main>
</template>

<style></style>

