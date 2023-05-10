<script setup lang="ts">
import CardsTable from '@/components/CardsTable.vue';
import CardDetails from '@/components/CardDetails.vue';
import AppSearchBar from '@/components/utils/AppSearchBar.vue';
import type { CardType } from '@/types/card';
import { onMounted, ref } from 'vue';
import AddingCardModal from '@/components/modals/adding-modal/AddingCardModal.vue';
import { getAllCards } from '@/services/card.service';

const cards = ref<CardType[]>([])

const selectedCard = ref<CardType>()
const isAddingCardModalOpened = ref<boolean>(false)

onMounted(async (): Promise<void> => {
  cards.value = await getAllCards()
  selectedCard.value = cards.value[0]
}) 
</script>

<template>
  <AddingCardModal
    v-show="isAddingCardModalOpened"
    title="Ajout d'une carte"
    :close-modal="() => isAddingCardModalOpened = false"
  />
  <main class="w-full flex transition-all">
    <div class="flex flex-col gap-2 p-8 w-full">
      <div class="flex justify-between items-center mb-6">
        <div class="flex flex-col gap-2">
          <h1 class="font-bold text-4xl text-neutral-900">{{ $t('globals.title') }}</h1>
          <h2 class="text-xl text-neutral-400 ">{{ $t('home.title') }}</h2>
        </div>
        <div class="flex gap-4">
          <AppSearchBar />
          <button @click="isAddingCardModalOpened = true" class="flex gap-2 items-center p-4 text-white bg-neutral-800 font-medium rounded-lg">
            <font-awesome-icon class=" mr-2" icon="fa-solid fa-plus" />
            Ajouter une carte
          </button>
        </div>
      </div>
      <CardsTable :selected-card="selectedCard" :on-select="(card) => selectedCard = card" :cards="cards as CardType[]" />
    </div>
    <CardDetails v-if="selectedCard" :card="selectedCard" />
  </main>
</template>
