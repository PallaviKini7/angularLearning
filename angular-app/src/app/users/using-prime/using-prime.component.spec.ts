import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingPrimeComponent } from './using-prime.component';

describe('UsingPrimeComponent', () => {
  let component: UsingPrimeComponent;
  let fixture: ComponentFixture<UsingPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingPrimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
