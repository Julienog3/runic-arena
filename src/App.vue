<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/navbar/AppNavbar.vue'
</script>

<template>
  <div class="flex flex-row bg-neutral-50">
    <AppNavbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
