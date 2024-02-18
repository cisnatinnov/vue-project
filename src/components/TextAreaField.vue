<template>  
  <ckeditor :editor="editor" v-model="value"></ckeditor>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  const props = defineProps({
    value: {
      type: String,
      default: `<p>ni adalah global component dari text area</p>`
    }
  })

  const value = ref('')
  const editor = ref(ClassicEditor)

  onMounted(() => {
    value.value = props.value
  })
</script>