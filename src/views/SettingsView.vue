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
  <div class="settings">
    <h1>This is an settings page</h1>
    <button @click="state.isModalOpened = true">toggle modal</button>
    <ConfirmationModal 
      v-if="state.isModalOpened"
      title="Confirmation de la supression"
      :close-modal="() => state.isModalOpened = false"
    />
  </div>
</template>

<style></style>
