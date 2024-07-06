import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from '../../../shared/models/playlist/videos';
import { YoutubeService } from '../../../shared/services/youtube.service';
import { FormsModule, NgForm } from '@angular/forms';
import { IPlayList } from '../../../shared/models/playlist/playList';

@Component({
  selector: 'app-card-fila',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-fila.component.html',
  styleUrl: './card-fila.component.css'
})
export class CardFilaComponent implements OnInit{
  
  busca: string = "";
  listVideo!: IPlayList;
  
  constructor(private readonly youtubeService: YoutubeService) {
  }
  ngOnInit(): void {
    this.youtubeService.getPlayList().subscribe({
      next: (success: IPlayList) => {
        this.videos = success.items;
      }
    });
  }
  @Input() videos: IVideo[] = [];
  searchVideo(){
    this.youtubeService.getVideos(this.busca).subscribe({
      next: (success: IPlayList) => {
        this.videos = success.items;
      }
    });
  }
}
