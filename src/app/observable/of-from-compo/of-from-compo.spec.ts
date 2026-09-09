import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfFromCompo } from './of-from-compo';

describe('OfFromCompo', () => {
  let component: OfFromCompo;
  let fixture: ComponentFixture<OfFromCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfFromCompo],
    }).compileComponents();

    fixture = TestBed.createComponent(OfFromCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
