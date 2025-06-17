<script setup lang="ts">
  import type { Task } from '@/models';
  import { useStore } from 'vuex';

  const props = defineProps<{ task: Task }>();
  const store = useStore();

  const toggleTaskStatus = () => {
    store.dispatch('tasks/updateTask', { ...props.task, completed: !props.task.completed });
  };
  const deleteTask = () => {
    store.dispatch('tasks/deleteTask', props.task.id);
  };
</script>
<template>
  <div :class="['task-item', { completed: task.completed }]">
    <div class="title-checkbox">
      <input class="cursor-pointer" type="checkbox" :checked="task.completed" @change="toggleTaskStatus" />
      <span>{{ task.title }}</span>
    </div>
    <button @click="deleteTask">Удалить</button>
  </div>
</template>

<style scoped lang="scss">
  .task-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    justify-content: space-between;
    margin-bottom: 10px;

    .title-checkbox {
      display: flex;
      align-items: center;
    }

    &.completed span {
      text-decoration: line-through;
      color: #999;
    }

    input {
      margin-right: 10px;
      cursor: pointer;
    }

    button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
  }
</style>
