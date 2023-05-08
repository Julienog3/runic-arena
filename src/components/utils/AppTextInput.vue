<script setup lang="ts">
  interface AppTextInputProps {
    value: string
    placeholder?: string
  }

  defineProps<AppTextInputProps>()
  const emit = defineEmits(['update:value'])

  const updateValue = (e: Event) => {
    emit('update:value', (e.target as HTMLInputElement).value)
  };
</script>

<template>
  <input 
    type="text" 
    id="name"
    :value="value"
    @input="updateValue"
    :placeholder="placeholder"
    class="border border-neutral-200 p-3 rounded-lg focus:border-violet-500 focus-within:border-violet-500 focus-visible:border-violet-500"
  />
</template>