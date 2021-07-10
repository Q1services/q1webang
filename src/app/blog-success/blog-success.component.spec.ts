import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSuccessComponent } from './blog-success.component';

describe('BlogSuccessComponent', () => {
  let component: BlogSuccessComponent;
  let fixture: ComponentFixture<BlogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
