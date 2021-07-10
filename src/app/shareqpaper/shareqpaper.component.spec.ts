import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareqpaperComponent } from './shareqpaper.component';

describe('ShareqpaperComponent', () => {
  let component: ShareqpaperComponent;
  let fixture: ComponentFixture<ShareqpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareqpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareqpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
