import { TestBed } from '@angular/core/testing';

import { ProductInfoService } from './product-info.service';

describe('ProductInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInfoService = TestBed.get(ProductInfoService);
    expect(service).toBeTruthy();
  });
});
