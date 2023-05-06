<script setup lang="ts">
  import { computed, type Component, ref, onUnmounted } from 'vue';
  import AppModal from '@/components/modals/AppModal.vue';
  import AddingForm from '@/components/forms/AddingForm.vue'
  import PaginationModal from '@/components/modals/PaginationModal.vue';
  import ImageForm from '@/components/forms/ImageForm.vue';
  import SkillsForm from '@/components/forms/SkillsForm.vue';

  interface AddingModalProps {
    title: string
    closeModal: () => void
  }

  type AddingModalTabType = {
    id: number
    name: string
    component: Component
  }

  defineProps<AddingModalProps>()
  
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
  
  const currentTabId = ref<number>(0)

  const nextStep = (): void => {
    console.log('next')
    currentTabId.value += 1
  }

  const previousStep = (): void => {
    console.log('previous')
    currentTabId.value -= 1
  }

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
      <div class="relative w-full min-h-[500px]">
        <Transition name="slide-fade">
          <component :is="currentTab" />
        </Transition>
      </div>
    </template>
    <template #footer>
      <div class="flex w-full justify-between border-t p-4">
      <PaginationModal :currentPage="currentTabId" :pageNumber="tabs.length" />
      <div class="flex gap-4">
        <button
          type="button"
          @click="previousStep()"
          class="font-medium border text-neutral-900 text-md px-12 py-3 rounded-lg"
        >
          Retour
        </button>
        <button
          type="button"
          @click="nextStep()"
          class="bg-violet-600  font-medium text-white text-md px-12 py-3 rounded-lg"
        >
          Créer la carte
        </button>
      </div>
    </div>
    </template>
  </AppModal>
</template>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100%);
  }

  .slide-fade-leave, .slide-fade-enter-from {
    transform: translateX(-100%);
  }
</style>
