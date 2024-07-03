export class Video implements IVideo{
    kind!: string;
    etag!: string;
    id!: string;
    snippet!: Snippet;
}

export interface IVideo {
    kind: string,
    etag: string,
    id: string,
    snippet: Snippet
}

export class Snippet {
    chanelId!: string;
    channelTitle!: string;
    description!: string;
    playlistId!: string;
    position!: number;
    publishedAt!: Date;
    resourceId!: ResourceId;
    thumbnails!: ThumbNails;
    title!: string;
    videoOwnerChannelId!: string;
    videoOwnerChannelTitle!: string;
}

export class ResourceId {
    kind: string;
    videoId: string

    constructor(kind: string, videoId: string){
        this.kind = kind;
        this.videoId = videoId;
    }
}

export class ThumbNails {
    default!: IThumbNails;
    medium!: IThumbNails;
    high!: IThumbNails;
}

export interface IThumbNails {
    height: number,
    url: string,
    width: number
}