import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQuestionComponent } from './remove-question.component';

describe('RemoveQuestionComponent', () => {
  let component: RemoveQuestionComponent;
  let fixture: ComponentFixture<RemoveQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
