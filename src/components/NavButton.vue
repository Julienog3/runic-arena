<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface NavButtonProps {
  path: string
}

const props = defineProps<NavButtonProps>()

</script>

<template>
  <RouterLink :to="props.path">
    <span class="w-16 h-16 rounded-lg flex items-center justify-center bg-neutral-800">
      <slot></slot>
    </span>
  </RouterLink>
</template>
