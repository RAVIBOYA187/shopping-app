import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchComp } from './switch-comp';

describe('SwitchComp', () => {
  let component: SwitchComp;
  let fixture: ComponentFixture<SwitchComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
