<script setup lang="ts">
import CardsTable from '@/components/CardsTable.vue';
import CardDetails from '@/components/CardDetails.vue';
import AppSearchBar from '@/components/utils/AppSearchBar.vue';
import type { CardType } from '@/types/card';
import data from '@/assets/data.json'
import { ref } from 'vue';
import AddingModal from '@/components/modals/adding-modal/AddingModal.vue';

const { cards } = data

const selectedCard = ref<CardType>()
const isAddingModalOpened = ref<boolean>(false)

</script>

<template>
  <AddingModal
    v-show="isAddingModalOpened"
    title="Ajout d'une carte"
    :close-modal="() => isAddingModalOpened = false"
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
          <button @click="isAddingModalOpened = true" class="flex gap-2 items-center p-4 text-white bg-neutral-800 font-medium rounded-lg">
            <font-awesome-icon class=" mr-2" icon="fa-solid fa-plus" />
            Ajouter une carte
          </button>
        </div>
      </div>
      <CardsTable :selected-card="selectedCard" :on-select="(card) => selectedCard = card" :cards="cards as CardType[]" />
    </div>
    <Transition>
      <CardDetails v-if="selectedCard" :card="selectedCard" />
    </Transition>
  </main>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all .25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(100%);
  }
</style>