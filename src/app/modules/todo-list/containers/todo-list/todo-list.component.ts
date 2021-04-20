import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, skip, takeUntil } from 'rxjs/operators';
import { TodoListService } from '../../services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService.init();

    this.saveTasksSub();
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  private saveTasksSub(): void {
    this.todoListService.tasks$
      .pipe(takeUntil(this.destroy), skip(1))
      .subscribe((tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  }
}
