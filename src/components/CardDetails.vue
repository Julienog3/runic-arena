<script lang="ts">
  import AppChip from '@/components/AppChip.vue'
  import { reactive } from 'vue';

  export default {
    components: {
      AppChip
    },
    setup() {
      const skillCategories = [
        {
          name: 'actives',
          label: 'Actives'
        },
        {
          name: 'passive',
          label: 'Passive'
        },
      ]

      const state = reactive({
        selectedSkillCategory: 'actives',
        skills: {
          actives: [
            {
              name: 'Critique',
              description: 'Double les dommages des X prochaines attaques'
            },
            {
              name: 'Malédiction',
              description: 'Divise par 2 les dommages des X prochaines attaques de l\'adversaire'
            },
          ],
          passive: [
            {
              name: 'Attaque',
              description: 'Si la carte engage le duel, la compétence est déclenchée'
            }
          ]
        }
      })

      const isCategorySelected = (route: string) => route === state.selectedSkillCategory

      return { state, skillCategories, isCategorySelected }
    } 
  }
</script>

<template>
  <aside class="w-4/6 border-l p-8">
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-4xl text-neutral-900">Souris sorcière</h3>
      <div class="flex gap-4">
        <button class="w-12 h-12 rounded-lg bg-neutral-300">
          <font-awesome-icon class="text-neutral-900" icon="fa-solid fa-pen" />
        </button>
        <button class="w-12 h-12 rounded-lg bg-red-300">
          <font-awesome-icon class="text-red-500" icon="fa-solid fa-trash" />
        </button>
      </div>
    </div>

    <div class="flex gap-8 mb-6">
      <img 
        class="w-48 rounded-lg"
        src="@/assets/sample-card.jpg"
        alt=""
      >
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Type</h4>
            <AppChip>Chaos</AppChip>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Classe</h4>
            <AppChip>Mage</AppChip>
          </div>
        </div>
        <p class=" text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio qui iusto alias fugit necessitatibus accusantium asperiores ab dicta assumenda.
        </p>
      </div>
    </div>

    <div class="">
      <ul class="border-b flex gap-4 pb-2 mb-4">
        <li @click="state.selectedSkillCategory = skill.name" v-for="skill in skillCategories" :key="skill.name" :class="isCategorySelected(skill.name) ? 'relative cursor-pointer text-purple-500' : 'relative cursor-pointer text-neutral-900'">
          {{ skill.label }}
          <span v-if="isCategorySelected(skill.name)" class="absolute bg-purple-500 w-full h-[2px] bottom-0 left-0 translate-y-[9px]"></span>
        </li>
      </ul>
      <ul class="flex flex-col gap-4">
        <li 
          v-for="skill in state.skills[state.selectedSkillCategory]" :key="skill.name"
          class="bg-neutral-200 w-full h-24 rounded-lg flex flex-col py-3 px-6 justify-center"
        >
          <h4 class="font-bold text-lg">{{ skill.name }}</h4>
          <p class="text-neutral-500 text-sm">{{ skill.description }}</p>
        </li>
      </ul>
    </div>
  </aside>
</template>


