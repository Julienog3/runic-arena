<script setup lang="ts">
import type { CardType } from '@/types/card';
import AppDropZone from '../../utils/AppDropZone.vue';

interface CardImageFormProps {
  card: CardType
}

defineProps<CardImageFormProps>()
</script>

<template>
  <div class="absolute top-0 left-0  w-full flex flex-col items-start gap-4">
    <div class=" flex justify-between w-full gap-4">
      <h1>ImageForm</h1>
      <input type="file" />
      <AppDropZone />
    </div>
  </div>
</template>


