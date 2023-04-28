<script setup lang="ts">
interface ModalProps {
  title: string
  closeModal: () => void
}

defineProps<ModalProps>()

</script>

<template>
  <Transition>
    <div
      class="fixed top-0 left-0 z-50 p-4 flex items-center justify-center overflow-x-hidden overflow-y-auto w-full min-h-screen bg-neutral-950/75">
      <div class="relative bg-white rounded-lg w-1/3 h-56 ">
        <div class="flex justify-between items-center p-4 mb-4 border-b">
          <h3 class="text-xl font-semibold">{{ title }}</h3>
          <button @click="closeModal()" class="w-12 h-12 flex items-center justify-center rounded-lg bg-red-200">
            <font-awesome-icon class="text-red-500 text-2xl" icon="fa-solid fa-xmark" />
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>  
  .v-enter-active,
  .v-leave-active {
    transition: opacity .25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
