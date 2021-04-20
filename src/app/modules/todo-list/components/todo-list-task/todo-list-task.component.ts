import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { TaskModel } from '../../models/task.interface';

@Component({
  selector: 'app-todo-list-task',
  templateUrl: './todo-list-task.component.html',
  styleUrls: ['./todo-list-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListTaskComponent {
  @Input()
  task!: TaskModel;
  @Output() changeStatus: EventEmitter<string> = new EventEmitter();

  constructor() {}
}
