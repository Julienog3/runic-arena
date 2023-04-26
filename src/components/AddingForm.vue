<script lang="ts">
  import { reactive } from 'vue'; 

  type CardInterface = {
    name: string
  }

  export default {
    setup() {
      const card = reactive<CardInterface>({
        name: ''
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
    <div class="flex flex-col">
      <label for="name" class="mb-2">Nom de la carte</label>
      <input 
        type="text" 
        id="name"
        v-model="card.name" 
        placeholder="Nom de la carte"
        class="border-2 border-neutral-400 p-2 rounded-lg"
      />
    </div>

    <button
      type="submit"
      class="bg-purple-500 text-white text-md px-12 py-4 rounded-lg"
    >
      <font-awesome-icon class="text-white mr-2" icon="fa-solid fa-pen" />
      Créer la carte
    </button>
  </form>
</template>


