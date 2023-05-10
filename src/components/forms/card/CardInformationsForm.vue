<script setup lang="ts">
  import { getAllCategories } from '@/services/category.service';
  import { getAllTypes } from '@/services/type.service';
  import { useAddingCardModalStore } from '@/stores/addingCardModal';
  import { onMounted, ref } from 'vue';

  const store = useAddingCardModalStore()

  interface ResponseItem {
    id: number
    name: string
  }

  const types = ref<ResponseItem[]>([])
  const categories = ref<ResponseItem[]>([])

  onMounted(async () => {
    types.value = await getAllTypes()
    categories.value = await getAllCategories()
  })

</script>

<template>
  <div
    class="absolute top-0 left-0 w-full flex flex-col items-start gap-4"
  >
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="name" class="mb-2">Nom</label>
      <input 
        type="text" 
        id="name"
        v-model="store.card.name"
        placeholder="Nom de la carte"
        class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="type" class="mb-2">Type</label>
      <select 
        type="text" 
        id="type"
        v-model="store.card.typeId"
        class="border border-neutral-200 p-3 rounded-lg"
      >
        <option v-for="cardType in types" :key="cardType.id" :value="cardType.id">{{ cardType.name }}</option>
      </select>
    </div>
    
  </div>
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="power" class="mb-2">Puissance</label>
      <input 
        type="number" 
        id="power"
        v-model="store.card.value"
        placeholder="Puissance"
        class="border border-neutral-200 p-3 rounded-lg"
      />
    </div>
    <div class="flex flex-col w-full">
      <label for="category" class="mb-2">Classe</label>
      <select 
        type="text" 
        id="category"
        v-model="store.card.classId"
        class="border border-neutral-200 p-3 rounded-lg"
      >
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
    </div>
  </div>
  <div class="flex justify-between w-full gap-4">
    <div class="flex flex-col w-full">
      <label for="description" class="mb-2">Description</label>
      <textarea 
        name="" 
        id="description"
        cols="30" 
        rows="10"
        v-model="store.card.description"
        placeholder="Ecrivez la description de la carte"
        class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500"
      ></textarea>
    </div>
  </div>    
</div>
</template>


