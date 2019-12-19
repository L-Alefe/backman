import { TestBed } from '@angular/core/testing';

import { Subject.ServiceService } from './subject.service.service';

describe('Subject.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Subject.ServiceService = TestBed.get(Subject.ServiceService);
    expect(service).toBeTruthy();
  });
});
