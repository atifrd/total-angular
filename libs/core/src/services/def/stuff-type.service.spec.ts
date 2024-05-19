import { TestBed } from '@angular/core/testing';

import { StuffTypeService } from './stuff-type.service';

describe('StuffTypeService', () => {
  let service: StuffTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuffTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
