<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const isLoading = computed(() => store.state.tasks.isLoading);
</script>

<template>
  <div v-if="isLoading" class="loader-overlay">
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #42b983;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
