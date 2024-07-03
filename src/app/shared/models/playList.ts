import { IVideo } from "./videos";

export interface IPlayList {
    etag: string,
    items: IVideo[],
    kind: string
}