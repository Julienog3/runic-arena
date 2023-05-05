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
  <form @submit="event => submit(event)" class="flex flex-col items-start gap-4">
    <div class="flex justify-between w-full gap-4">
      <h1>SkillsForm</h1>
    </div>
  </form>
</template>


