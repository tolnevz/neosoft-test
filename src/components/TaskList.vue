<script setup lang="ts">
  import type { Task } from '@/models';
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import TaskItem from './TaskItem.vue';

  const store = useStore();
  const filteredTasks = computed<Task[]>(() => store.getters['tasks/filteredTasks']);

  onMounted(() => {
    store.dispatch('tasks/fetchTasks');
  });
</script>
<template>
  <div class="task-list">
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </div>
</template>

<style scoped lang="scss">
  .task-list {
    margin-top: 20px;
    width: 600px;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
</style>
