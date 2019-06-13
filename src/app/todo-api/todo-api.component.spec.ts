import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAPIComponent } from './todo-api.component';

describe('TodoAPIComponent', () => {
  let component: TodoAPIComponent;
  let fixture: ComponentFixture<TodoAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
