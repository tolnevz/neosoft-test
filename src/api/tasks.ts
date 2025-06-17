import type { Task } from '@/models';

let tasks: Task[] = [
  { id: 1, title: 'Создать в проекте модуль, эмулирующий API с помощью Promise + setTimeout', completed: true },
  { id: 2, title: 'Реализовать хранение задач во Vuex', completed: false },
  { id: 3, title: 'Добавить простой интерфейс: Список задач, добавление задачи, фильтры, кнопка удаления задачи, чекбокс выполнения', completed: false },
];

let nextId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

const emulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const fetchTasks = (): Promise<Task[]> => {
  return emulateApiCall([...tasks]);
};

export const addTask = (task: Omit<Task, 'id'>): Promise<Task> => {
  const newTask = { id: nextId++, ...task };
  tasks.push(newTask);
  return emulateApiCall(newTask);
};

export const updateTask = (updatedTask: Task): Promise<Task> => {
  const index = tasks.findIndex((task) => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.splice(index, 1, updatedTask);
  }
  return emulateApiCall(updatedTask);
};

export const deleteTask = (id: number): Promise<void> => {
  tasks = tasks.filter((task) => task.id !== id);
  return emulateApiCall(undefined);
};
