import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromEventcomp } from './from-eventcomp';

describe('FromEventcomp', () => {
  let component: FromEventcomp;
  let fixture: ComponentFixture<FromEventcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromEventcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(FromEventcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
