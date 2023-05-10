<script setup lang="ts">
  import { computed, type Component, ref, onUnmounted, reactive, toRaw } from 'vue';
  import AppModal from '@/components/modals/AppModal.vue';
  import AddingForm from '@/components/forms/card/CardInformationsForm.vue'
  import PaginationModal from '@/components/modals/PaginationModal.vue';
  import ImageForm from '@/components/forms/card/CardImageForm.vue';
  import SkillsForm from '@/components/forms/card/CardSkillsForm.vue';
  import { TransitionNameEnum } from '@/types/transition';
  import { useAddingCardModalStore } from '@/stores/addingCardModal'
  import { createCard } from '@/services/card.service'

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

  const store = useAddingCardModalStore()
  
  const currentTabId = ref<number>(0)

  const transitionType = ref<TransitionNameEnum>()

  const nextStep = async (): Promise<void> => {
    transitionType.value = TransitionNameEnum.SLIDE_IN
    
    if (currentTabId.value >= tabs.length - 1) {
      await createCard(store.card).then(() => {
        props.closeModal()
        store.$reset()
      })
    } else {
      currentTabId.value += 1
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
    :close-modal="() => {
      store.$reset()
      closeModal()
    }"
  >
    <template #body>
      <form 
        @submit="$event => submit($event)" 
        class="relative w-full min-h-[500px]"
      >
        <Transition :name="transitionType">
          <component :is="currentTab" />
        </Transition>
      </form>
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
