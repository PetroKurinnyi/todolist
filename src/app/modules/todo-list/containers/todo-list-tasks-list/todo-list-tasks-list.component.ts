import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TaskModel } from '../../models/task.interface';
import { TodoListService } from '../../services';

@Component({
  selector: 'app-todo-list-tasks-list',
  templateUrl: './todo-list-tasks-list.component.html',
  styleUrls: ['./todo-list-tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListTasksListComponent {
  @Input() listTitle = '';
  @Input() tasks: TaskModel[] | null = [];

  constructor(private todoListService: TodoListService) {}

  changeStatus(id: string): void {
    this.todoListService.changeStatus(id);
  }
}
