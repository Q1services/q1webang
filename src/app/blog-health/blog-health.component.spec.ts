import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHealthComponent } from './blog-health.component';

describe('BlogHealthComponent', () => {
  let component: BlogHealthComponent;
  let fixture: ComponentFixture<BlogHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
