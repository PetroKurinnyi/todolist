import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTaskFormComponent } from './todo-list-task-form.component';

describe('TodoListTaskFormComponent', () => {
  let component: TodoListTaskFormComponent;
  let fixture: ComponentFixture<TodoListTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
