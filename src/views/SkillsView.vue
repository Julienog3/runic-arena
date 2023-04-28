<script setup lang="ts">
  import AddingForm from '@/components/AddingForm.vue'
  import SkillCard from '@/components/skill-view/SkillCard.vue';
</script>

<template>
  <main class="w-full flex">
    <div class="flex flex-col gap-2 p-8  w-full">
      <h1 class="font-bold text-4xl text-neutral-900">Runic arena</h1>
      <h2 class="text-xl text-neutral-400 mb-6">Liste des compétences</h2>
      <div class="grid grid-cols-3 gap-4">
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
      </div>
    </div>
  </main>
</template>

<style></style>
