import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEngComponent } from './quiz-eng.component';

describe('QuizEngComponent', () => {
  let component: QuizEngComponent;
  let fixture: ComponentFixture<QuizEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
