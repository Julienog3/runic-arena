<script setup lang="ts">
import { SkillTypeEnum, type SkillType } from '@/types/skill'
import { computed, ref } from 'vue'
import CardDetailsSkillCard  from './CardDetailsSkillCard.vue'
import { TransitionNameEnum } from '@/types/transition'

interface CardDetailsSkillListProps {
  skills: SkillType[]
}

const props = defineProps<CardDetailsSkillListProps>()

const skillCategories = [
  {
    name: SkillTypeEnum.ACTIVE,
    label: 'Actives'
  },
  {
    name: SkillTypeEnum.PASSIVE,
    label: 'Passive'
  },
]

const selectedSkillType = ref<SkillTypeEnum>(SkillTypeEnum.ACTIVE)
const transitionName = ref<TransitionNameEnum>()

const isCategorySelected = (route: string) => route === selectedSkillType.value

const selectSkillType = (skillType: SkillTypeEnum) => {
  const previousSkillTypeIndex = skillCategories.findIndex((skill) => skill.name === selectedSkillType.value)
  const nextSkillTypeIndex = skillCategories.findIndex((skill) => skill.name === skillType)

  if (previousSkillTypeIndex > nextSkillTypeIndex) {
    transitionName.value = TransitionNameEnum.SLIDE_IN
  } else {
    transitionName.value = TransitionNameEnum.SLIDE_OUT
  }
  console.log(transitionName.value)

  selectedSkillType.value = skillType
}

const currentSkills = computed(() => {
  return props.skills.filter((skill) => (skill.isActive ? SkillTypeEnum.ACTIVE : SkillTypeEnum.PASSIVE) === selectedSkillType.value)
})
</script>

<template>
  <div class="app-skills-list">
    <ul class="border-b flex gap-4 pb-2 mb-4 ">
      <li @click="selectSkillType(skill.name)" v-for="skill in skillCategories" :key="skill.name" :class="isCategorySelected(skill.name) ? 'relative cursor-pointer text-purple-500' : 'relative cursor-pointer text-neutral-900'">
        {{ skill.label }}
        <span v-if="isCategorySelected(skill.name)" class="absolute bg-purple-500 w-full h-[2px] bottom-0 left-0 translate-y-[9px]"></span>
      </li>
    </ul>
    <Transition :name="transitionName">
      <ul class="flex flex-col h-full gap-4 overflow-y-scroll">
        <CardDetailsSkillCard
          v-for="skill in currentSkills" 
          :key="skill.name" 
          :skill="skill"
        />
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
  .app-skills-list ul::-webkit-scrollbar {
    display: none;
  }
  .slide-in-enter-active {
    transition: all .3s ease;
  }
  .slide-in-leave-active {
    transition: all .3s ease;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateX(-100%);
    opacity: 0
  }

  .slide-in-leave, .slide-in-enter-from {
    transform: translateX(100%);
  }
  .slide-out-enter-active {
    transition: all .3s ease;
  }
  .slide-out-leave-active {
    transition: all .3s ease;
  }
  .slide-out-enter, .slide-out-leave-to {
    transform: translateX(100%);
    opacity: 0
  }

  .slide-out-leave, .slide-out-enter-from {
    transform: translateX(-100%);
  }
</style>