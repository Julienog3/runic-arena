<script setup lang="ts">
  import AppModal from './AppModal.vue';

  interface ModalProps {
    title: string
    closeModal: () => void
  }

  defineProps<ModalProps>()
</script>

<template>
  <AppModal 
    :title="title"
    :close-modal="() => closeModal()"
  >
  <template #body>
    <div class="flex flex-col gap-4">
      <p>Êtes vous sur de vouloir supprimer ?</p>
      <button class="flex gap-2 items-center p-4 text-white bg-red-500 font-medium rounded-lg">
        <font-awesome-icon class="mr-2" icon="fa-solid fa-trash" />
        Ajouter une carte
      </button>
    </div>
  </template>
  </AppModal>
</template>
