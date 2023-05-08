<script setup lang="ts">
  import type { CardType } from '@/types/card'; 

  interface CardInformationsFormProps {
    card: CardType
  }

  defineProps<CardInformationsFormProps>()
  defineEmits<{
    (e: 'change', id: number): void
    (e: 'update', value: string): void
  }>()
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full flex flex-col items-start gap-4"
  >
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="name" class="mb-2">Nom</label>
      <AppText 
        type="text" 
        id="name"
        :value="card.name"
        @input="$emit('update:value', $event.target.value)"
        placeholder="Nom de la carte"
        class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="type" class="mb-2">Type</label>
      <select 
        type="text" 
        id="type"
        :value="card.type"
        @input="$emit('update:value', $event.target.value)"
        class="border border-neutral-200 p-3 rounded-lg"
      >
        <option value="chaos" selected>Chaos</option>
        <option value="halo">Halo</option>
      </select>
    </div>
    
  </div>
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="power" class="mb-2">Puissance</label>
      <input 
        type="number" 
        id="power"
        :value="card.power"
        @input="$emit('update:value', $event.target.value)"
        placeholder="Puissance"
        class="border border-neutral-200 p-3 rounded-lg"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="category" class="mb-2">Classe</label>
      <select 
        type="text" 
        id="category"
        v-model="card.category" 
        class="border border-neutral-200 p-3 rounded-lg"
      >
        <option value="archer" selected>Archer</option>
        <option value="warrior">Guerrier</option>
        <option value="healer">Soigneur</option>
        <option value="wizard">Mage</option>
        <option value="rogue">Assassin</option>
      </select>
    </div>
  </div>
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="power" class="mb-2">Description</label>
      <textarea 
        name="" 
        id="description"
        cols="30" 
        rows="10"
        v-model="card.description" 
        placeholder="Ecrivez la description de la carte"
        class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500"
      ></textarea>
    </div>
  </div>    
</div>
</template>


