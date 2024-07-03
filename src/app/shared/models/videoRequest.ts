export class RequestVideo {
    key: string;
    part: string;
    playlistId: string;

    constructor(key: string, part: string, playlistId: string){
        this.key = key;
        this.part = part;
        this.playlistId = playlistId;
    }
}