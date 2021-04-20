import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTasksListComponent } from './todo-list-tasks-list.component';

describe('TodoListTasksListComponent', () => {
  let component: TodoListTasksListComponent;
  let fixture: ComponentFixture<TodoListTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTasksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
