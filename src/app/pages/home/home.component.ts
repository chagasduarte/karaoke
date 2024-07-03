import { Component, OnInit } from '@angular/core';
import { CardFilaComponent } from "../card-fila/card-fila.component";
import { CardPessoasComponent } from '../card-pessoas/card-pessoas.component';
import { CardPlayingComponent } from '../card-playing/card-playing.component';
import { YoutubeService } from '../../shared/services/youtube.service';
import { RequestVideo } from '../../shared/models/videoRequest';
import { IPlayList } from '../../shared/models/playList';
import { CommonModule } from '@angular/common';
import { IVideo } from '../../shared/models/videos';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      CardFilaComponent,
      CardPessoasComponent,
      CardPlayingComponent,
      CommonModule
    ]
})
export class HomeComponent implements OnInit{
  videos!: IVideo[]
  requestVideo = new RequestVideo("", "snippet", "PLESrnPp1eqbUkUvycvjnFk6WkMDVv7t6v");
  constructor(private readonly youtubeService: YoutubeService){}

  ngOnInit(): void {
    this.youtubeService.getPlayList(this.requestVideo).subscribe({
      next: (success: IPlayList) => {
        this.videos = success.items
        console.log(success.items);
      }
    });
  }
   
}
