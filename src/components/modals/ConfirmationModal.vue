<script setup lang="ts">
  import AppModal from './AppModal.vue';

  interface ModalProps {
    title: string
    closeModal: () => void
    onDelete: () => void
  }

  defineProps<ModalProps>()
</script>

<template>
  <AppModal 
    :title="title"
    :close-modal="() => closeModal()"
  >
  <template #body>
    <div class="py-4">
      <p>Êtes vous sur de vouloir supprimer ?</p>
    </div>
  </template>

  <template #footer>
    <div class="flex w-full flex-row-reverse p-4 gap-4">
      <button @click="onDelete()" class="flex gap-2 items-center p-4 w-fit text-white bg-red-500 font-medium rounded-lg">
        <font-awesome-icon class="mr-2" icon="fa-solid fa-trash" />
        Supprimer
      </button>
      <button @click="closeModal()" class="flex gap-2 items-center p-4 w-fit text-neutral-800 border border-neutral-300 font-medium rounded-lg">
        Annuler
      </button>
    </div>
  </template>
  </AppModal>
</template>
