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
    <div>
      
    </div>
  </AppModal>
</template>
