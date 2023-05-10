<script setup lang="ts">
  import { ColorEnum } from '@/types/color';
  import { computed } from 'vue';

  interface ChipProps {
    color: ColorEnum
  }

  const props = defineProps<ChipProps>()

  const colors = {
    [ColorEnum.NEUTRAL]: "bg-neutral-200 text-neutral-500",
    [ColorEnum.PURPLE]: "bg-purple-200 text-purple-500",
    [ColorEnum.SKY]: "bg-sky-200 text-sky-500",
    [ColorEnum.RED]: "bg-red-200 text-red-500",
    [ColorEnum.YELLOW]: "bg-yellow-100 text-yellow-500",
    [ColorEnum.GREEN]: "bg-green-200 text-green-500",
  }

  const getColor = computed(() => colors[props.color])
</script>

<template>
  <span class="py-2 px-4 rounded-lg max-w-min" :class="`${getColor}`">
    <slot></slot>
  </span>
</template>
