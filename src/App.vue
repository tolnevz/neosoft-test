<script setup lang="ts">
  import TaskList from './components/TaskList.vue';
  import TaskInput from './components/TaskInput.vue';
  import TaskFilter from './components/TaskFilter.vue';
  import PageLoader from './components/PageLoader.vue';
</script>

<template>
  <div class="container">
    <h1 class="text-center">Список задач</h1>

    <div class="flex">
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>

    <PageLoader />
  </div>
</template>

<style scoped lang="scss">
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .container {
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .text-center {
    text-align: center;
  }
</style>
