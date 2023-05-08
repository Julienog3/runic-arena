<script lang="ts">
import { TypeEnum, type CardType, CategoryEnum } from '@/types/card';
import { reactive } from 'vue';

export default {
  setup() {
    const card = reactive<CardType>({
      name: "",
      type: TypeEnum.CHAOS,
      description: "",
      power: 0,
      category: CategoryEnum.ARCHER,
      skills: []
    });
    const submit = (event: Event) => {
      event.preventDefault();
    };
    return { card, submit };
  },
}
</script>

<template>
  <form @submit="event => submit(event)" class="absolute top-0 left-0  w-full flex flex-col items-start gap-4">
    <div class="flex flex-col justify-between w-full gap-4">
      <h2 class="text-lg font-semibold text-neutral-800">Capacités actives</h2>
      <div class="flex flex-col w-full">
        <label for="type" class="mb-2">Type</label>
        <select 
          type="text" 
          id="type"
          v-model="card.type" 
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option value="chaos" selected>Chaos</option>
          <option value="halo">Halo</option>
        </select>
      </div>
      <div class="flex flex-col w-full">
        <h2 class="text-lg font-semibold text-neutral-800">Capacité passive</h2>
        <label for="type" class="mb-2">Type</label>
        <select 
          type="text" 
          id="type"
          v-model="card.type" 
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option value="chaos" selected>Chaos</option>
          <option value="halo">Halo</option>
        </select>
      </div>
    </div>
  </form>
</template>


