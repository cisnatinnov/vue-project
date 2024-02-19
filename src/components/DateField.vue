<template>
  <input :type="type" name="date" id="date" v-model="computedValue">
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:modelValue', value)
    }
  })
</script>