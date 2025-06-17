<script setup lang="ts">
  import { Filter } from '@/models';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const currentFilter = computed(() => store.state.tasks.filter);

  const setFilter = (filter: string) => {
    store.commit('tasks/setFilter', filter);
  };
</script>
<template>
  <div class="task-filter">
    <button @click="setFilter(Filter.All)" :class="{ active: currentFilter === Filter.All }">Все</button>
    <button @click="setFilter(Filter.Active)" :class="{ active: currentFilter === Filter.Active }">Активные</button>
    <button @click="setFilter(Filter.Completed)" :class="{ active: currentFilter === Filter.Completed }">Выполненные</button>
  </div>
</template>

<style scoped lang="scss">
  .task-filter {
    margin-top: 20px;

    button {
      margin: 0 5px;
      padding: 8px 15px;
      border: 1px solid #42b983;
      background-color: white;
      color: #42b983;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .task-filter button.active {
    background-color: #42b983;
    color: white;
  }
</style>
