<script setup lang="ts">
import { ColorEnum } from '@/types/color';
import AppChip from '../utils/AppChip.vue';
</script>

<template>
  <article class="rounded-lg border border-neutral-300 min-h-40 p-8 bg-white">
    <div class="flex items-center justify-between border-b border-neutral-300 pb-4 mb-4">
      <div class="flex items-center gap-4">
        <font-awesome-icon class="text-neutral-300 text-3xl " icon="fa-solid fa-fire" />
        <h3 class="text-xl font-semibold text-neutral-950">Capacité</h3>
      </div>
      <AppChip :color="ColorEnum.SKY">Active</AppChip> 
    </div>
    <p class="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, deleniti?</p>
  </article>
</template>
