<template>
  <form>
    <TextField type="text" v-model="text"/>
    <DateField type="date" v-model="date"/>
    <TextAreaField v-model="textarea"/>
    <TextField type="number" v-model="number"/>
  </form>
</template>

<script setup>
  import TextField from '../components/TextField.vue';
  import TextAreaField from '@/components/TextAreaField.vue';
  import DateField from '@/components/DateField.vue';
  import { ref } from 'vue';

  const text = ref('ini adalah global component dari text field')
  const date = ref('2024-02-16')
  const textarea = ref('<p>ni adalah global component dari text area</p>')
  const number = ref(100)
</script>