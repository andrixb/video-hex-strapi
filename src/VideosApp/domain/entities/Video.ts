import { Properties } from '../../../Shared/infrastructure/types/FunctionPropertiesType';


export default class Video {
    title: string;
    slug: string;
    url: string;
    isPublic: boolean;
    author?: string;


    constructor(
        title: string,
        slug: string,
        url: string,
        isPublic: boolean,
        author: string,
    ) {
        this.title = title;
        this.author = author;
        this.slug = slug;
        this.url = url;
        this.isPublic = isPublic;
    }
}

export type VideoConstructor = Properties<Video>;
