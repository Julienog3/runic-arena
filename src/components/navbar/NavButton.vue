<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface NavButtonProps {
  path: string
  label: string
}

const props = defineProps<NavButtonProps>()

const isPopoverToggled = ref(false)
</script>

<template>
  <RouterLink :to="props.path">
    <span 
      @mouseover="isPopoverToggled = true"
      @mouseleave="isPopoverToggled = false"
      class="relative w-16 h-16 rounded-lg flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition-all">
      <slot></slot>
      <Transition>
        <span 
          v-show="isPopoverToggled"
          class="absolute whitespace-nowrap right-0 z-50 translate-x-[calc(100%+1rem)] text-white text-md rounded-lg backdrop-blur-sm bg-neutral-900/75 p-2"
        >{{ props.label }}</span>
      </Transition>
    </span>
  </RouterLink>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity .25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>