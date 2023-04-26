<script setup lang="ts">
  import AppChip from '@/components/AppChip.vue'
</script>

<template>
  <aside class="w-4/6 border-l p-8">
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-4xl text-neutral-900">Souris sorcière</h3>
      <div class="flex gap-4">
        <button class="w-12 h-12 rounded-lg bg-neutral-300">
          <font-awesome-icon class="text-neutral-900" icon="fa-solid fa-pen" />
        </button>
        <button class="w-12 h-12 rounded-lg bg-red-300">
          <font-awesome-icon class="text-red-500" icon="fa-solid fa-trash" />
        </button>
      </div>
    </div>

    <div class="flex gap-8">
      <img 
        class="w-48 rounded-lg"
        src="@/assets/sample-card.jpg"
        alt=""
      >
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Type</h4>
            <AppChip>Chaos</AppChip>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">Classe</h4>
            <AppChip>Chaos</AppChip>
          </div>
        </div>
        <p class=" text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio qui iusto alias fugit necessitatibus accusantium asperiores ab dicta assumenda.
        </p>
      </div>
    </div>
  </aside>
</template>


