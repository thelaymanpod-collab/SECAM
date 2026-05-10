import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishopsComponent } from './bishops.component';

describe('BishopsComponent', () => {
  let component: BishopsComponent;
  let fixture: ComponentFixture<BishopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BishopsComponent]
    });
    fixture = TestBed.createComponent(BishopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
