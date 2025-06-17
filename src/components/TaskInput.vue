<script setup lang="ts">
  import { ref } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const newTaskTitle = ref('');

  const addTask = () => {
    const title = newTaskTitle.value.trim();
    if (title) {
      store.dispatch('tasks/addTask', { title, completed: false });
      newTaskTitle.value = '';
    }
  };
</script>
<template>
  <div class="task-input">
    <input type="text" v-model="newTaskTitle" @keyup.enter="addTask" placeholder="Писать тут" />
    <button @click="addTask">Добавить задачу</button>
  </div>
</template>

<style scoped lang="scss">
  .task-input {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
      padding: 10px;
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 4px;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    button {
      padding: 10px 15px;
      background-color: #42b983;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
      white-space: nowrap;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
</style>
