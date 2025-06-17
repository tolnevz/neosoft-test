export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export interface TasksState {
  tasks: Task[];
  filter: string;
  isLoading: boolean;
}
