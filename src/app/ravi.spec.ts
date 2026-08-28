import { TestBed } from '@angular/core/testing';
import { Ravi } from './ravi';

describe('Ravi', () => {
  let service: Ravi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ravi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
