<script setup lang="ts">
  import SkillCard from '@/components/skill-view/SkillCard.vue';
</script>

<template>
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8  w-full">
      <h1 class="font-bold text-4xl text-neutral-900">Runic arena</h1>
      <h2 class="text-xl text-neutral-400 mb-6">Liste des compétences</h2>
      <div class="grid grid-cols-3 gap-4">
        <article class="rounded-lg flex items-center justify-center border border-dashed border-neutral-300 min-h-40 p-8 bg-white">
          <div class="flex items-center gap-4">
            <font-awesome-icon class="text-neutral-300 text-3xl " icon="fa-solid fa-plus" />
            <h3 class="text-xl font-normal text-neutral-300">Ajouter une capacité</h3>
          </div>
        </article>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
      </div>
    </div>
  </main>
</template>

<style></style>
