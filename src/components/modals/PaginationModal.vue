<script setup lang="ts">

interface PaginationModalProps {
  pageNumber: number
  currentPage: number
}

const props = defineProps<PaginationModalProps>()

const pages = Array(props.pageNumber).fill(0)

</script>


<template>
  <div class="flex gap-2 items-center">
    <span v-for="(_, index) in pages" :key="index" class="w-4 h-4 rounded-full" :class="`${(index === currentPage) ? 'bg-violet-500' : 'bg-neutral-200'}`"/>
  </div>
</template>


<style scoped></style>