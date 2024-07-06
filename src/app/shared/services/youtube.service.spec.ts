import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { mockHttpProvider } from '../mock/htppClientMocks.spec';
import { Component } from '@angular/core';

describe('YoutubeService', () => {
  let service: YoutubeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      providers: [
        provideHttpClientTesting(),
        mockHttpProvider
      ]
    }).compileComponents();
    
    service = TestBed.inject(YoutubeService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call Youtube Api', () => {
    it('should call getPlaylist', () => {
      spyOn(service, 'getPlayList').and.callThrough();
      service.getPlayList();
      expect(service.getPlayList).toHaveBeenCalled();
    });
    it('should call Youtube Api', () => {
      spyOn(service, 'getVideos').and.callThrough();
      service.getVideos("");
      expect(service.getVideos).toHaveBeenCalled();
    });
  });
});
