import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestVideo } from '../models/videoRequest';
import { IPlayList } from '../models/playList';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  url!: string

  constructor(private readonly http: HttpClient){ 
     this.url = "https://www.googleapis.com/youtube/v3/";
  }

  getPlayList(request: RequestVideo): Observable<IPlayList>{
    const opcoes: string[] = [];
    opcoes.push("key="+request.key);
    opcoes.push("part="+request.part);
    opcoes.push("playlistId="+request.playlistId);
    opcoes.push("maxResults=8");
    
    return this.http.get<IPlayList>(`${this.url}playlistItems?`+ opcoes.join("&"));
  }

}
