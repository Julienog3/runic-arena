<script setup lang="ts">
  const onDrop = (event :Event) => {
    console.log(event)
  }

</script>

<template>
  <div
    @drop="$event => onDrop($event)"
    class="w-full h-48 border border-neutral-300 rounded flex items-center justify-center"
  >
    <span class="text-lg font-medium text-neutral-500">Déposer l'image de la carte</span>
  </div>
</template>