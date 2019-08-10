import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetScoredComponent } from './get-scored.component';

describe('GetScoredComponent', () => {
  let component: GetScoredComponent;
  let fixture: ComponentFixture<GetScoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetScoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetScoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
