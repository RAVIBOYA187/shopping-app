import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntervalComp } from './interval-comp';

describe('IntervalComp', () => {
  let component: IntervalComp;
  let fixture: ComponentFixture<IntervalComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalComp],
    }).compileComponents();

    fixture = TestBed.createComponent(IntervalComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
