<script setup lang="ts">
import { computed, type PropType } from 'vue'

interface ButtonProps {
  onClick: () => void
  icon: string
  color: PropType<ColorEnum>
}

enum ColorEnum {
  NEUTRAL = 'neutral',
  PURPLE = 'purple',
  SKY = 'sky',
  RED = 'red',
  YELLOW = 'yellow'
}

const colors = {
  [ColorEnum.NEUTRAL]: "bg-neutral-200 text-neutral-500",
  [ColorEnum.PURPLE]: "bg-purple-200 text-purple-500",
  [ColorEnum.SKY]: "bg-sky-200 text-sky-500",
  [ColorEnum.RED]: "bg-red-200 text-red-500",
  [ColorEnum.YELLOW]: "bg-yellow-100 text-yellow-500",
}

const props = defineProps <ButtonProps>()

const getColor = computed(() => colors[props.color])
</script>
<template>
  <button @click="onClick()" class="w-12 h-12 rounded-lg" :class="getColor">
    <font-awesome-icon :icon="`fa-solid ${icon}`" />
  </button>
</template>
