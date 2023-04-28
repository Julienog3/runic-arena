<script lang="ts">
  import AppChip from '@/components/utils/AppChip.vue'
  import { TypeEnum, CategoryEnum, type CardType } from './../types/card.d.ts';

  export default {
    components: {
      AppChip
    },
    setup() {
      const cards: CardType[] = [
        {
          name: 'Souris',
          type: TypeEnum.CHAOS,
          category: CategoryEnum.ARCHER
        },
        {
          name: 'Souris',
          type: TypeEnum.CHAOS,
          category: CategoryEnum.HEALER
        },
        {
          name: 'Souris de combat',
          type: TypeEnum.HALO,
          category: CategoryEnum.ROGUE
        },
        {
          name: 'Souris',
          type: TypeEnum.CHAOS,
          category: CategoryEnum.WARRIOR
        },
        {
          name: 'Souris',
          type: TypeEnum.HALO,
          category: CategoryEnum.WIZARD
        },
      ]

      return { cards }
    }
  }
</script>

<template>
  <div class="app-table relative h-[500px] border rounded-xl overflow-y-scroll">
    <table class="relative text-left h-full w-full">
      <thead class="sticky top-0 left-0 bg-neutral-800">
        <tr class="text-white ">
          <th scope="col" class="px-6 py-4 font-normal">Nom</th>
          <th scope="col" class="px-6 py-4 font-normal">Type</th>
          <th scope="col" class="px-6 py-4 font-normal">Classe</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(card, index) in cards" 
          :key="index"
          class="border-b"
        >
          <td scope="col" class="px-6 py-4">{{ card.name }}</td>
          <td scope="col" class="px-6 py-4">
            <AppChip color="yellow">{{ $t(`card.types.${card.type}`) }}</AppChip>
          </td>
          <td scope="col" class="px-6 py-4">
            <AppChip color="sky">{{ $t(`card.categories.${card.category}`) }}</AppChip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .app-table::-webkit-scrollbar {
    display: none;
  }
</style>