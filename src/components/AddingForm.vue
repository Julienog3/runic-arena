<script lang="ts">
  import { TypeEnum, type CardType, CategoryEnum } from '@/types/card'; 
  import { reactive } from 'vue'; 

  export default {
    setup() {
      const card = reactive<CardType>({
        name: '',
        type: TypeEnum.CHAOS,
        description: '',
        power: 0,
        category: CategoryEnum.ARCHER,
        skills: []
      })

      const submit = (event: Event) => {
        event.preventDefault()
        console.log(card)
      }

      return { card, submit }
    }
  }
</script>

<template>
  <form 
    @submit="event => submit(event)"
    class="flex flex-col items-start gap-4"
  >
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="name" class="mb-2">Nom</label>
      <input 
        type="text" 
        id="name"
        v-model="card.name" 
        placeholder="Nom de la carte"
        class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500"
      />
    </div>
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
    
  </div>
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="power" class="mb-2">Puissance</label>
      <input 
        type="number" 
        id="power"
        v-model="card.power" 
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
  <div class="flex w-full justify-between border-t pt-4">
    <div class="flex gap-2 items-center">
      <span class="w-4 h-4 bg-neutral-200 rounded-full" />
      <span class="w-4 h-4 bg-violet-500 rounded-full" />
      <span class="w-4 h-4 bg-neutral-200 rounded-full" />
    </div>
    <div class="flex gap-4">
      <button
        type="button"
        class="font-medium border text-neutral-900 text-md px-12 py-3 rounded-lg"
      >
        Retour
      </button>
      <button
        type="submit"
        class="bg-violet-600  font-medium text-white text-md px-12 py-3 rounded-lg"
      >
        Créer la carte
      </button>
    </div>
  </div>
    
  </form>
</template>


