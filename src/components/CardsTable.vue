<script setup lang="ts">
  import AppChip from '@/components/utils/AppChip.vue'
  import { TypeEnum, type CardType, CategoryEnum } from '@/types/card';
  import { ColorEnum } from '@/types/color';
  import { toRaw } from 'vue';

  interface CardTableProps {
    cards: CardType[]
    selectedCard?: CardType
    onSelect: (card: CardType) => void
  }

  const props = defineProps<CardTableProps>()

  const compareCards = (card: CardType) => card === toRaw(props.selectedCard)

  const getColorByType = (type: TypeEnum): ColorEnum => {
    if (type === TypeEnum.CHAOS) {
      return ColorEnum.PURPLE
    }

    if (type === TypeEnum.HALO) {
      return ColorEnum.YELLOW
    }

    return ColorEnum.NEUTRAL
  }

  console.log(props.cards)

</script>

<template>
  <div class="app-table relative h-[500px] border rounded-xl overflow-y-scroll bg-white">
    <table class="relative text-left h-full w-full">
      <thead class="sticky top-0 left-0 bg-neutral-800">
        <tr class="text-white ">
          <th scope="col" class="px-6 py-4 font-medium">{{ $t(`globals.name`) }}</th>
          <th scope="col" class="px-6 py-4 font-medium">{{ $t(`globals.type`) }}</th>
          <th scope="col" class="px-6 py-4 font-medium">{{ $t(`globals.category`) }}</th>
        </tr>
      </thead>
      <tbody class="h-full">
        <tr 
          v-for="(card, index) in props.cards" 
          :key="index"
          class="border-b cursor-pointer hover:bg-neutral-100 max-h-20 transition-colors"
          :class="compareCards(card) ? 'bg-neutral-100' : ''"
          @click="onSelect(card)"
        >
          <td scope="col" class="px-6 py-4">{{ card.name }}</td>
          <td scope="col" class="px-6 py-4">
            <AppChip :color="getColorByType(card.type)">{{ $t(`card.types.${card.type}`) }}</AppChip>
          </td>
          <td scope="col" class="px-6 py-4">
            <AppChip color="sky">{{ card.category }}</AppChip>
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