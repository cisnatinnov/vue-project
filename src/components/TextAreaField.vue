<template>  
  <ckeditor :editor="editor" v-model="computedValue"></ckeditor>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  const props = defineProps({
    modelValue: {
      type: String,
      default: ``
    }
  })


  const editor = ref(ClassicEditor)

  const emit = defineEmits(['update:modelValue'])

  const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:modelValue', value)
    }
  })
</script>