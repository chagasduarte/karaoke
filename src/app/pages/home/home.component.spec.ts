import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { YoutubeService } from '../../shared/services/youtube.service';
import { IPlayList } from '../../shared/models/playlist/playList';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let youtubeServiceSpy: jasmine.SpyObj<YoutubeService>;

  beforeEach(async () => {

    youtubeServiceSpy = jasmine.createSpyObj(YoutubeService, ['getPlayList', 'getVideos' ])

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: YoutubeService, useValue: youtubeServiceSpy}
      ]
    })
    .compileComponents();
    youtubeServiceSpy.getPlayList.and.returnValue(of( {} as IPlayList));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
