import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';


export default class Video {
    id: number;
    title: string;
    slug: string;
    url: string;
    isPublic: boolean;
    author?: string;


    constructor(
        id: number,
        title: string,
        slug: string,
        url: string,
        isPublic: boolean,
        author: string,
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.slug = slug;
        this.url = url;
        this.isPublic = isPublic;
    }
}

export type VideoType = Properties<Video>;
