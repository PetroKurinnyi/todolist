import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { idGenerator } from 'src/app/modules/shared/utils/id-gen';
import { TodoListService } from '../../services';
import { uniqTaskTitleValidator } from '../../utils/validators';

@Component({
  selector: 'app-todo-list-task-form',
  templateUrl: './todo-list-task-form.component.html',
  styleUrls: ['./todo-list-task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListTaskFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this.generateForm();
  }

  create(): void {
    this.todoListService.createTask(this.form.value);
    this.generateForm();
  }

  private generateForm(): void {
    this.form = this.fb.group({
      id: [idGenerator()],
      title: [
        '',
        [
          Validators.required,
          uniqTaskTitleValidator(),
          Validators.pattern(/^[a-zA-Z0-9].*/),
        ],
      ],
      description: [''],
      status: ['incompleted'],
    });
  }
}
