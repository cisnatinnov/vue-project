<template>
  <TextField type="text" />
  <DateField />
  <TextAreaField />
  <TextField type="number" value="100"/>
</template>

<script setup>
  import TextField from '../components/TextField.vue';
  import TextAreaField from '@/components/TextAreaField.vue';
  import DateField from '@/components/DateField.vue';
</script>