import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"
import { Observable, of } from "rxjs";
import { IPlayList } from "../models/playlist/playList";

export const appConfigMock = {
    "youtubeApi":"https://www.googleapis.com/youtube/v3",
    "key": "AIzaSyBgliuzy_VqjnYAHmwPlYY9E68qoZDdwQ4",
    "listId": "PLESrnPp1eqbUkUvycvjnFk6WkMDVv7t6v",
    "part": "snippet"
}
export const playlist: IPlayList = {
    etag: "",
    items: [],
    kind: ""
}

export class HttpClientMock {
    get(url: string, option?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?:HttpParams | {
            [param:string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredencials?: boolean;
    }): Observable<any> {
        return of(playlist);
    } 
}

export const mockHttpProvider = { provide: HttpClient, useClass: HttpClientMock}