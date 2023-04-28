<script lang="ts">
  import AppChip from '@/components/utils/AppChip.vue'
  import AppButton from '@/components/utils/AppButton.vue'
  import ConfirmationModal from './modals/ConfirmationModal.vue';
  import { computed, reactive } from 'vue';
  import SkillList from './SkillList.vue';

  export enum SkillCategoryEnum {
    ACTIVES = 'actives',
    PASSIVE = 'passive'
  }

  export default {
    components: {
      AppChip,
      AppButton,
      ConfirmationModal,
      SkillList
    },
    setup() {
      const currentSkills = computed(() => {
        return state.skills[state.selectedSkillCategory]
      })

      const state = reactive({
        isModalOpened: false,
        selectedSkillCategory: SkillCategoryEnum.ACTIVES,
        skills: {
          [SkillCategoryEnum.ACTIVES]: [
            {
              name: 'Critique',
              description: 'Double les dommages des X prochaines attaques'
            },
            {
              name: 'Malédiction',
              description: 'Divise par 2 les dommages des X prochaines attaques de l\'adversaire'
            },
          ],
          [SkillCategoryEnum.PASSIVE]: [
            {
              name: 'Attaque',
              description: 'Si la carte engage le duel, la compétence est déclenchée'
            }
          ]
        }
      })

      const isCategorySelected = (route: string) => route === state.selectedSkillCategory

      return { state, isCategorySelected, currentSkills }
    } 
  }
</script>

<template>
  <ConfirmationModal 
    v-show="state.isModalOpened"
    title="Confirmation de la suppression"
    :close-modal="() => state.isModalOpened = false"
  />
  <aside class="w-4/6 border-l p-8">
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-4xl text-neutral-900">Souris sorcière</h3>
      <div class="flex gap-4">
        <AppButton :on-click="() => state.isModalOpened = true" color="neutral" icon="fa-pen"/>
        <AppButton :on-click="() => state.isModalOpened = true" color="red" icon="fa-trash"/>
      </div>
    </div>

    <div class="flex gap-8 mb-12">
      <div class="relative w-full">
        <img 
          class="rounded-lg"
          src="@/assets/sample-card.jpg"
          alt=""
        >
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-orange-500 bg-orange-200 text-lg font-semibold">46</span>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Type</h4>
            <AppChip color="purple">Chaos</AppChip>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Classe</h4>
            <AppChip color="sky">Mage</AppChip>
          </div>
        </div>
        <p class=" text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio qui iusto alias fugit necessitatibus accusantium asperiores ab dicta assumenda.
        </p>
      </div>
    </div>
    <SkillList :skills="state.skills" />
  </aside>
</template>


