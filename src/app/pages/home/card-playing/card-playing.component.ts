import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from '../../../shared/models/playlist/videos';

@Component({
  selector: 'app-card-playing',
  standalone: true,
  imports: [],
  templateUrl: './card-playing.component.html',
  styleUrl: './card-playing.component.css'
})
export class CardPlayingComponent{

  @Input() video!: IVideo;

}
