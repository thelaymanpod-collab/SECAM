import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenariesComponent } from './plenaries.component';

describe('PlenariesComponent', () => {
  let component: PlenariesComponent;
  let fixture: ComponentFixture<PlenariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlenariesComponent]
    });
    fixture = TestBed.createComponent(PlenariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
