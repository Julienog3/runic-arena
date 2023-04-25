<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template >
  <div class="flex flex-row">
    <AppNavbar />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
