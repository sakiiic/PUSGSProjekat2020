import { TestBed } from '@angular/core/testing';

import { ReserveSeatDataHandlerService } from './reserve-seat-data-handler.service';

describe('ReserveSeatDataHandlerService', () => {
  let service: ReserveSeatDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveSeatDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
