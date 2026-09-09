import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomeObs } from './custome-obs';

describe('CustomeObs', () => {
  let component: CustomeObs;
  let fixture: ComponentFixture<CustomeObs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeObs],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomeObs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
