<template>
  <div class="about">
    <h1>This is an about page {{ count() }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
  import { onMounted } from "vue";
  import { useStore } from "vuex";

  const store = useStore();

  const count = () => {
    return store.state.count
  }

  onMounted(() => {
    store.commit('increment')
  })
</script>