import { Filter, type Task, type TasksState } from '@/models';
import * as api from '../../api/tasks';
import type { Module } from 'vuex';

const tasksModule: Module<TasksState, any> = {
  namespaced: true,
  state: {
    tasks: [],
    filter: Filter.All,
    isLoading: false,
  },
  mutations: {
    setTasks(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    addTask(state, task: Task) {
      state.tasks.push(task);
    },
    updateTask(state, updatedTask: Task) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    deleteTask(state, id: number) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    setFilter(state, filter: string) {
      state.filter = filter;
    },
    setLoading(state, status: boolean) {
      state.isLoading = status;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      commit('setLoading', true);
      try {
        const tasks = await api.fetchTasks();
        commit('setTasks', tasks);
      } finally {
        commit('setLoading', false);
      }
    },
    async addTask({ commit }, task: Omit<Task, 'id'>) {
      commit('setLoading', true);
      try {
        const newTask = await api.addTask(task);
        commit('addTask', newTask);
      } finally {
        commit('setLoading', false);
      }
    },
    async updateTask({ commit }, task: Task) {
      commit('setLoading', true);
      try {
        const updatedTask = await api.updateTask(task);
        commit('updateTask', updatedTask);
      } finally {
        commit('setLoading', false);
      }
    },
    async deleteTask({ commit }, id: number) {
      commit('setLoading', true);
      try {
        await api.deleteTask(id);
        commit('deleteTask', id);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
    filteredTasks: (state) => {
      if (state.filter === Filter.Active) {
        return state.tasks.filter((task) => !task.completed);
      } else if (state.filter === Filter.Completed) {
        return state.tasks.filter((task) => task.completed);
      }
      return state.tasks;
    },
  },
};

export default tasksModule;
