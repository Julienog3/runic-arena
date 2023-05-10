<script setup lang="ts">
  import { computed, type Component, ref, onUnmounted, reactive, toRaw } from 'vue';
  import AppModal from '@/components/modals/AppModal.vue';
  import AddingForm from '@/components/forms/card/CardInformationsForm.vue'
  import PaginationModal from '@/components/modals/PaginationModal.vue';
  import ImageForm from '@/components/forms/card/CardImageForm.vue';
  import SkillsForm from '@/components/forms/skill/SkillForm.vue';
  import { TransitionNameEnum } from '@/types/transition';
  import { TypeEnum, type CardType, CategoryEnum } from '@/types/card';
  import type { SkillType } from '@/types/skill';
  import { useAddingCardModalStore } from '@/stores/addingCardModal'
  import { addSkill } from '@/services/skill.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

  interface AddingModalProps {
    title: string
    closeModal: () => void
  }

  type AddingModalTabType = {
    id: number
    name: string
    component: Component
  }

  const props = defineProps<AddingModalProps>()
  
  const tabs: AddingModalTabType[] = [
    {
      id: 0,
      name: 'adding-form',
      component: AddingForm
    },
    {
      id: 1,
      name: 'skills-form',
      component: SkillsForm
    },
    {
      id: 2,
      name: 'image-form',
      component: ImageForm
    }
  ]

  const skill = ref<SkillType>({
    isActive: false,
    isPercentage: false
  })

  const store = useAddingCardModalStore()
  
  const currentTabId = ref<number>(0)

  const transitionType = ref<TransitionNameEnum>()

  const nextStep = (): void => {
    transitionType.value = TransitionNameEnum.SLIDE_IN
    currentTabId.value += 1

    if (currentTabId.value >= tabs.length) {
      // submit
    }
  }

  const previousStep = (): void => {
    transitionType.value = TransitionNameEnum.SLIDE_OUT

    if (currentTabId.value <= 0) {
      props.closeModal()
      store.$reset()
    } else {
      currentTabId.value -= 1
    } 
  }

  const submit = (event: Event) => {
    event.preventDefault();
  };

  const currentTab = computed(() => {
    return tabs.find(({ id }) => currentTabId.value === id)?.component 
  })

  onUnmounted(() => {
    currentTabId.value = 0
  })
</script>

<template>
  <AppModal 
    :title="title"
    :close-modal="() => closeModal()"
  >
    <template #body>
          <div class="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Nom</label>
                  <input type="text" v-model="skill.name" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="Le nom" required>
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Description</label>
                  <input type="message" v-model="skill.description" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="La description">
              </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-1"> 
            <div>
              <label for="valeur" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Valeur</label>
              <input type="number" v-model="skill.value" class="w-full border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" placeholder="La valeur" required>
            </div>      
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-1"> 
            <div>
                <input type="checkbox" v-model=skill.isPercentage class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                <label for="percentage" class="ml-2 text-sm font-medium text-dark-900 dark:text-dark-300">La valeur est en poucentage</label>
            </div>       
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
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
          <div class="grid gap-6 mb-6"> 
            <div>
                <input type="checkbox" v-model=skill.isActive class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                <label for="actif" class="ml-2 text-sm font-medium text-dark-900 dark:text-dark-300">La capacité est active</label>
            </div>       
          </div>
    </template>
    <template #footer>
      <div class="flex w-full justify-end border-t p-4">
      <div class="flex gap-4">
        <button @click="addSkill(skill)" class="bg-violet-600 font-medium text-white text-md px-12 py-3 rounded-lg">Ajouter la capacité</button>
      </div>
    </div>
    </template>
  </AppModal>
</template>

<style scoped>
  .slide-in-enter-active {
    transition: all .3s ease;
  }
  .slide-in-leave-active {
    transition: all .3s ease;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateX(-100%);
    opacity: 0
  }

  .slide-in-leave, .slide-in-enter-from {
    transform: translateX(100%);
  }
  .slide-out-enter-active {
    transition: all .3s ease;
  }
  .slide-out-leave-active {
    transition: all .3s ease;
  }
  .slide-out-enter, .slide-out-leave-to {
    transform: translateX(100%);
    opacity: 0
  }

  .slide-out-leave, .slide-out-enter-from {
    transform: translateX(-100%);
  }
</style>
