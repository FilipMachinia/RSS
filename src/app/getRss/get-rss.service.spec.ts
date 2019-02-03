import {inject, TestBed} from '@angular/core/testing';

import {GetRssService} from './get-rss.service';

describe('GetRssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRssService]
    });
  });

  it('should be created', inject([GetRssService], (service: GetRssService) => {
    expect(service).toBeTruthy();
  }));
});
