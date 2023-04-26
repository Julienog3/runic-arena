<script setup lang="ts">
import CardsTable from '@/components/CardsTable.vue';
import CardDetails from '@/components/CardDetails.vue';

</script>

<template>
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8 w-full">
      <div class="flex justify-between items-center mb-6">
        <div class="flex flex-col gap-2">
          <h1 class="font-bold text-4xl text-neutral-900">Runic arena</h1>
          <h2 class="text-xl text-neutral-400 ">Liste des cartes</h2>
        </div>
        <input
          type="text"
          placeholder="Rechercher une carte"
          class="border border-neutral-300 p-2 rounded-lg" 
        />
      </div>
      <CardsTable />
    </div>
    <CardDetails />
  </main>
</template>
