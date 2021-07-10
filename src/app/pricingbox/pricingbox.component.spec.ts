import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingboxComponent } from './pricingbox.component';

describe('PricingboxComponent', () => {
  let component: PricingboxComponent;
  let fixture: ComponentFixture<PricingboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
