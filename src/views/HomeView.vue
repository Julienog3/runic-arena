<script setup lang="ts">
import CardsTable from '@/components/CardsTable.vue';
import CardDetails from '@/components/CardDetails.vue';

</script>

<template>
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8  w-full">
      <h1 class="font-bold text-4xl text-neutral-900">Runic arena</h1>
      <h2 class="text-xl text-neutral-400 mb-6">Liste des cartes</h2>
      <CardsTable />
    </div>
    <CardDetails />
  </main>
</template>
