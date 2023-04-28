<script setup lang="ts">
  import AppModal from './AppModal.vue';
  import AddingForm from '@/components/AddingForm.vue'

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
      <AddingForm />
    </div>
  </AppModal>
</template>
