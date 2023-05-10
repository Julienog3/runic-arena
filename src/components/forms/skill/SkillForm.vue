<script setup lang="ts">
import { useAddingCardModalStore } from '@/stores/addingCardModal';
import type { CategoryEnum, TypeEnum } from '@/types/card';
import type { SkillType } from '@/types/skill';
import { onMounted, ref } from 'vue';

interface SkillInformationsFormProps {
  id: Number
  name: string
  description: string
  value?: number
  isPercentage?: boolean
  isActive?: boolean
  red?: number
  blue?: number
  yellow?: number
}

const skill = ref<SkillType>({name: "",})

const store = useAddingCardModalStore()

const props = defineProps<SkillInformationsFormProps>()
// defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()
const emit = defineEmits(['update:name', 'update:description', 'update:type', 'update:category', 'update:power'])

  // onUpdated(() => {
  //   console.log('test')
  // }) 

</script>

<template>
  <div class="absolute top-0 left-0 w-full flex flex-col items-start gap-4">
    <div class="flex justify-between w-full gap-4">
      <div class="flex flex-col w-full">
        <label for="name" class="mb-2">Nom</label>
        <input type="text" id="name" v-model="skill.name" placeholder="Nom de la carte"
          class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500" />
      </div>
    </div>
  </div>
</template>


