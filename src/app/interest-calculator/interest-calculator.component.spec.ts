import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculatorComponent } from './interest-calculator.component';

describe('InterestCalculatorComponent', () => {
  let component: InterestCalculatorComponent;
  let fixture: ComponentFixture<InterestCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
