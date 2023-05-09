<script setup lang="ts">
import { TypeEnum, type CardType, CategoryEnum } from '@/types/card';
import type { SkillType } from '@/types/skill';
import { reactive } from 'vue';

interface CardSkillsFormProps {
  skills: SkillType[]
}


const props = defineProps<CardSkillsFormProps>()
</script>

<template>
  <form class="absolute top-0 left-0  w-full flex flex-col items-start gap-4">
    <div class="flex flex-col justify-between w-full gap-4">
      <h2 class="text-lg font-semibold text-neutral-800">Capacités actives</h2>
      <div class="flex flex-col w-full">
        <label for="type" class="mb-2">Type</label>
        <select 
          type="text" 
          id="type"
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
          class="border border-neutral-200 p-3 rounded-lg"
        >
          <option value="chaos" selected>Chaos</option>
          <option value="halo">Halo</option>
        </select>
      </div>
    </div>
  </form>
</template>


