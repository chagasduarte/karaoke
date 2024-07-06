import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilaComponent } from './card-fila.component';
import { YoutubeService } from '../../../shared/services/youtube.service';
import { of } from 'rxjs';
import { IPlayList } from '../../../shared/models/playlist/playList';

describe('CardFilaComponent', () => {
  let component: CardFilaComponent;
  let fixture: ComponentFixture<CardFilaComponent>;
  let youtubeServiceSpy: jasmine.SpyObj<YoutubeService>;

  beforeEach(async () => {

    youtubeServiceSpy = jasmine.createSpyObj(YoutubeService, ['getPlayList', 'getVideos' ])

    await TestBed.configureTestingModule({
      imports: [CardFilaComponent],
      providers: [
        { provide: YoutubeService, useValue: youtubeServiceSpy}
      ]
    })
    .compileComponents();
    
    youtubeServiceSpy.getPlayList.and.returnValue(of( {} as IPlayList));
    youtubeServiceSpy.getVideos.and.returnValue(of( {} as IPlayList));

    fixture = TestBed.createComponent(CardFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call searchVideo', () => {
    spyOn(component, "searchVideo").and.callThrough();
    component.searchVideo();
    expect(component.searchVideo).toHaveBeenCalled();
  });
});
