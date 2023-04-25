

<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  interface NavButtonProps {
    path: string
  }

  const props = defineProps<NavButtonProps>()

  console.log(props)

</script>

<template>
  <RouterLink :to="props.path">
    <span>
      <slot></slot>
    </span>
  </RouterLink>
</template>


