<script setup lang="ts">
  import AppChip from '@/components/utils/AppChip.vue'
  import AppButton from '@/components/utils/AppButton.vue'
  import ConfirmationModal from './modals/ConfirmationModal.vue';
  import { ref } from 'vue';
  import CardDetailsSkillList from './CardDetailsSkillList.vue';
  import type { CardType } from '@/types/card';

  interface CardDetailsProps {
    card: CardType
  }

  const props = defineProps<CardDetailsProps>()

  const isModalOpened = ref(false)
</script>

<template>
  <ConfirmationModal 
    v-show="isModalOpened"
    title="Confirmation de la suppression"
    :close-modal="() => isModalOpened = false"
  />
  <aside class="w-4/6 border-l p-8 bg-white">
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-4xl text-neutral-900">{{ props.card.name }}</h3>
      <div class="flex gap-4">
        <AppButton :on-click="() => isModalOpened = true" color="neutral" icon="fa-pen"/>
        <AppButton :on-click="() => isModalOpened = true" color="red" icon="fa-trash"/>
      </div>
    </div>

    <div class="flex gap-8 mb-12">
      <div class="relative w-full">
        <img 
          class="rounded-lg"
          src="@/assets/sample-card.jpg"
          alt=""
        >
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-orange-500 bg-orange-200 text-lg font-semibold">
          {{ props.card.value }}
        </span>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">{{ $t('globals.type') }}</h4>
            <AppChip color="purple">{{ $t(`card.types.${props.card.type}`) }}</AppChip>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">{{ $t('globals.category') }}</h4>
            <AppChip color="sky">{{ $t(`card.categories.${props.card.category}`) }}</AppChip>
          </div>
        </div>
        <p class=" text-neutral-500">
          {{ props.card.description }}
        </p>
      </div>
    </div>
    <CardDetailsSkillList v-if="card.skills"  :skills="card.skills" />
  </aside>
</template>


