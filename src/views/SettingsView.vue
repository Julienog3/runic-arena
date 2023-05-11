<script lang="ts">
  import ConfirmationModal from'@/components/modals/ConfirmationModal.vue'
import { reactive } from 'vue';

  export default {
    components: {
      ConfirmationModal
    },
    setup() {
      const state = reactive({
        isModalOpened: false
      })

      return { state }
    }
  }
  
</script>

<template>
  <div class="flex flex-col gap-2 p-8 w-full">
    <div class="flex flex-col">
      <h1 class="font-bold text-4xl text-neutral-900 mb-2">Runic arena</h1>
      <h2 class="text-xl text-neutral-400 mb-6">Paramètres</h2>
    </div>
    <div class="h-full w-full bg-white rounded-lg border flex items-center justify-center">
      <span class="text-3xl font-bold text-neutral-400">Coming soon</span>
    </div>
  </div>
</template>

<style></style>
