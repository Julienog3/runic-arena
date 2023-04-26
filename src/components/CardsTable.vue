
<script lang="ts">
  import AppChip from '@/components/AppChip.vue'

  export default {
    components: {
      AppChip
    },
    setup() {
      const cards = [
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        },
        {
          name: 'Souris',
          type: 'Chaos',
          class: 'Magicien'
        }
      ]

      return { cards }
    }
  }
</script>

<template>
  <div class="relative overflow-hidden rounded-xl">
    <table class="text-left w-full border">
      <thead class="bg-neutral-800">
        <tr class="text-white ">
          <th scope="col" class="px-6 py-4 font-normal">Nom</th>
          <th scope="col" class="px-6 py-4 font-normal">Type</th>
          <th scope="col" class="px-6 py-4 font-normal">Classe</th>
        </tr>
      </thead>
      <tbody class="">
        <tr 
          v-for="(card, index) in cards" 
          :key="index"
          class="border-b"
        >
          <td scope="col" class="px-6 py-4">{{ card.name }}</td>
          <td scope="col" class="px-6 py-4">
            <AppChip color="purple">{{ card.type }}</AppChip>
          </td>
          <td scope="col" class="px-6 py-4">
            <AppChip color="sky">{{ card.class }}</AppChip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
</style>