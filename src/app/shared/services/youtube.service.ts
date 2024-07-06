import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayList } from '../models/playlist/playList';
import { Config } from '../models/config';
import { IVideo } from '../models/playlist/videos';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  youtubeApi!: string
  request!: Config;
  constructor(
    private readonly http: HttpClient,
    private readonly config: ConfigService
  ){ 
    this.request = this.config.get();
  }

  getPlayList(): Observable<IPlayList>{
    const opcoes: string[] = [];
    opcoes.push("key="+this.request.key);
    opcoes.push("part="+this.request.part);
    opcoes.push("playlistId="+this.request.listId);
    opcoes.push("maxResults=8");
    
    return this.http.get<IPlayList>(`${this.request.youtubeApi}/playlistItems?`+ opcoes.join("&"));
  }

  getVideos(query: string ): Observable<IPlayList>{
    const opcoes: string[] = [];
    opcoes.push("key="+this.request.key);
    opcoes.push("part="+this.request.part);
    opcoes.push("maxResults=9");
    opcoes.push(`q=${query} karaoke`);
    
    return this.http.get<IPlayList>(`${this.request.youtubeApi}/search?`+ opcoes.join("&"));
  }

}
