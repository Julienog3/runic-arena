<script lang="ts">
import { useRoute } from 'vue-router'

import NavButton from './NavButton.vue'
import { computed, onUpdated, reactive, watch } from 'vue'

export default {
  components: {
    NavButton
  },
  setup() {
    const routes = [
      {
        name: 'home',
        path: '/',
        icon: 'fa-house',
      },
      {
        name: 'adding',
        path: '/adding',
        icon: 'fa-plus',
      },
      {
        name: 'settings',
        path: '/settings',
        icon: 'fa-gear',
      },
    ]

    
    const state = reactive({ 
      selectedRoute: 'home'
    })

    const isRouteSelected = (route: string) =>  route === state.selectedRoute

    const route = useRoute()
    const currentRouteName = computed(() => route.name)

    watch(currentRouteName, async (route) => { 
      if (route) {
        state.selectedRoute = route.toString()
      }
    })

    return { routes, isRouteSelected, currentRouteName }
  }
}
</script>

<template>
  <nav class="w-28 h-screen p-12 bg-neutral-900 flex flex-col gap-6 items-center">
    <NavButton 
      v-for="route in routes" 
      :key="route.name" 
      :path="route.path"
    >
      <font-awesome-icon 
      :class="(isRouteSelected(route.name)) ?
        'text-3xl text-purple-500' :
        'text-3xl text-neutral-500'
      " 
      :icon="`fa-solid ${route.icon}`" />
      <span v-if="isRouteSelected(route.name)" class="bg-purple-500 w-2 h-8 rounded-e-lg absolute left-0">
      </span>
    </NavButton>
  </nav>
</template>

<style scoped></style>
