<template>
  <input :type="type" name="text" id="tex" v-model="value">
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const props = defineProps({
    value: {
      type: String,
      default: `ini adalah global component dari text field`
    },
    type: {
      type: String,
      default: `text`
    }
  })

  const value = ref('')

  onMounted(() => {
    value.value = props.value
  })
</script>