import { TestBed } from '@angular/core/testing';

import { AddLibraryItemService } from './add-library-item.service';

describe('AddLibraryItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddLibraryItemService = TestBed.get(AddLibraryItemService);
    expect(service).toBeTruthy();
  });
});
