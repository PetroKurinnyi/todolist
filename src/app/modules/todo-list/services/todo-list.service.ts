import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TaskModel } from '../models/task.interface';

@Injectable()
export class TodoListService {
  tasks$: BehaviorSubject<TaskModel[]> = new BehaviorSubject([] as TaskModel[]);

  constructor() {}

  get completedTasks$(): Observable<TaskModel[]> {
    return this.tasks$.pipe(
      map((tasks) => {
        return tasks.filter((task) => task.status === 'completed');
      })
    );
  }

  get incompletedTasks$(): Observable<TaskModel[]> {
    return this.tasks$.pipe(
      map((tasks) => {
        return tasks.filter((task) => task.status === 'incompleted');
      })
    );
  }

  init(): void {
    const tasks = JSON.parse(`${localStorage.getItem('tasks')}`);
    this.tasks$.next(tasks);
  }

  createTask(task: TaskModel): void {
    this.tasks$.next([...this.tasks$.value, task]);
  }

  changeStatus(id: string): void {
    this.tasks$.next(
      this.tasks$.value.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            status: task.status === 'completed' ? 'incompleted' : 'completed',
          };
        }

        return task;
      })
    );
  }

  removeTask(id: string): void {}
}
