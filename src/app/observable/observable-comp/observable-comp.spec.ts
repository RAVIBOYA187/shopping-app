import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableComp } from './observable-comp';

describe('ObservableComp', () => {
  let component: ObservableComp;
  let fixture: ComponentFixture<ObservableComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
