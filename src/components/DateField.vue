<template>
  <input type="date" name="date" id="date" v-model="value">
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const props = defineProps({
    value: {
      type: String,
      default: "2024-02-16",
    }
  })

  const value = ref('')

  onMounted(() => {
    value.value = props.value
  })
</script>