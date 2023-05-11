<script setup lang="ts">
import CardsTable from '@/components/CardsTable.vue';
import CardDetails from '@/components/CardDetails.vue';
import AppSearchBar from '@/components/utils/AppSearchBar.vue';
import type { CardType } from '@/types/card';
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import CardModal from '@/components/modals/card-modal/CardModal.vue';
import { getAllCards } from '@/services/card.service';

const cards = ref<CardType[]>([])

const selectedCard = ref<CardType>()
const isAddingCardModalOpened = ref<boolean>(false)

const searchFilter = ref<string>('')

onMounted(async (): Promise<void> => {
  cards.value = await getAllCards()
  selectedCard.value = cards.value[0]
})

watch(isAddingCardModalOpened, async () => {
  cards.value = await getAllCards()
})

const filteredCards = computed(() => {
  return cards.value.filter((card) => {
    console.log(card.name.toLowerCase(), searchFilter.value.toLowerCase())
    return card.name.toLowerCase().includes(searchFilter.value.toLowerCase())
  })
})

</script>

<template>
  <CardModal
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
          <input
            type="text"
            placeholder="Rechercher une carte"
            v-model="searchFilter"
            class="border border-neutral-300 p-2 rounded-lg" 
          />
          <button @click="isAddingCardModalOpened = true" class="flex gap-2 items-center p-4 text-white bg-neutral-800 font-medium rounded-lg">
            <font-awesome-icon class=" mr-2" icon="fa-solid fa-plus" />
            Ajouter une carte
          </button>
        </div>
      </div>
      <CardsTable :selected-card="selectedCard" :on-select="(card) => selectedCard = card" :cards="filteredCards as CardType[]" />
    </div>
    <CardDetails v-if="selectedCard" :card="selectedCard" />
  </main>
</template>
