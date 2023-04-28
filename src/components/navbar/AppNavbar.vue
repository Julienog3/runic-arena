<script lang="ts">
import { useRoute } from 'vue-router'

import NavButton from './NavButton.vue'
import { computed, reactive, watch } from 'vue'

export default {
  components: {
    NavButton
  },
  setup() {
    const routes = [
      {
        name: 'home',
        label: 'Liste des cartes',
        path: '/',
        icon: 'fa-people-group',
      },
      {
        name: 'skills',
        label: 'Liste des capacités',
        path: '/skills',
        icon: 'fa-fire',
      },
      {
        name: 'settings',
        label: 'Paramètres',
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
  <nav class="w-28 h-screen p-12 bg-neutral-900 flex flex-col items-center justify-between">
    <span class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-yellow-100"></span>
    <div class="flex flex-col gap-4">
      <NavButton 
        v-for="route in routes" 
        :key="route.name" 
        :path="route.path"
        :label="route.label"
      >
        <font-awesome-icon 
        :class="(isRouteSelected(route.name)) ?
            'text-3xl transition-all text-purple-500' :
            'text-3xl transition-all text-neutral-500'
          " 
        :icon="`fa-solid ${route.icon}`" />
        <Transition>
          <span v-show="isRouteSelected(route.name)" class="bg-purple-500 w-2 h-8 rounded-e-lg absolute left-0 -translate-x-6 transition-all" />
        </Transition>
      </NavButton>
    </div>
    <span class="text-neutral-500 text-sm text-center">© 2023 Studio Goblins</span>
  </nav>
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
