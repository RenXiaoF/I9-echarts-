/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EchartsService } from './echarts.service';

describe('Service: Echarts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchartsService]
    });
  });

  it('should ...', inject([EchartsService], (service: EchartsService) => {
    expect(service).toBeTruthy();
  }));
});
