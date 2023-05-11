<script setup lang="ts">
  import AppChip from '@/components/utils/AppChip.vue'
  import AppButton from '@/components/utils/AppButton.vue'
  import ConfirmationModal from './modals/ConfirmationModal.vue';
  import { ref } from 'vue';
  import CardDetailsSkillList from './CardDetailsSkillList.vue';
  import type { CardType } from '@/types/card';
  import { deleteCard } from '@/services/card.service'
  import CardModal from './modals/card-modal/CardModal.vue';
import { useAddingCardModalStore } from '@/stores/addingCardModal';

  interface CardDetailsProps {
    card: CardType
  }

  const props = defineProps<CardDetailsProps>()
  
  const store = useAddingCardModalStore()

  const handleDelete = (): void => {
    deleteCard(props.card.id)
    isDeleteModalOpened.value = false
  }

  const toggleEditModal = () => {
    isEditingModalOpened.value = true
    store.addExistingCard({
      name: props.card.name,
      typeId: props.card.typeId,
      description: props.card.description,
      value: props.card.value,
      image: props.card.illustration,
      classId: props.card.classId,
      activeSkills: props.card.skills.filter((card) => card.isActive).map((card) => {
        return card.id
      }),
      passiveSkill: props.card.skills.find((card) => !card.isActive)?.id
    })
  }

  const isDeleteModalOpened = ref<boolean>(false)
  const isEditingModalOpened = ref<boolean>(false)
</script>

<template>
  <ConfirmationModal 
    v-show="isDeleteModalOpened"
    title="Confirmation de la suppression"
    :close-modal="() => isDeleteModalOpened = false"
    :on-delete="() => handleDelete()"
  />
  <CardModal
      v-show="isEditingModalOpened"
      title="Modification d'une carte"
      :close-modal="() => isEditingModalOpened = false"
      :card="card"
    />
  <aside class="w-4/6 border-l p-8 bg-white">
    <div class="flex justify-between mb-8">
      <h3 class="font-bold text-4xl text-neutral-900">{{ props.card.name }}</h3>
      <div class="flex gap-4">
        <AppButton :on-click="() => toggleEditModal()" color="neutral" icon="fa-pen"/>
        <AppButton :on-click="() => isDeleteModalOpened = true" color="red" icon="fa-trash"/>
      </div>
    </div>

    <div class="flex gap-8 mb-8">
      <div class="relative max-w-[180px]">
        <img 
          class="rounded-lg"
          src="@/assets/sample-card.jpg"
          alt=""
        >
        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-orange-500 bg-orange-200 text-lg font-semibold">
          {{ props.card.value }}
        </span>
      </div>
      <div class="flex flex-col gap-4 w-full">
        <div class="flex gap-8">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">{{ $t('globals.type') }}</h4>
            <AppChip color="purple">{{ $t(`card.types.${props.card.type}`) }}</AppChip>
          </div>
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold text-neutral-500">{{ $t('globals.category') }}</h4>
            <AppChip color="sky">{{ card.category }}</AppChip>
          </div>
        </div>
        <p class="text-neutral-500">
          {{ props.card.description }}
        </p>
      </div>
    </div>
    <CardDetailsSkillList v-if="card.skills"  :skills="card.skills" />
  </aside>
</template>


