import Meta from '../../domain/entities/Meta';

type DataVideoType =  
    {
        id: number;
        attributes: {
            isPublic: boolean;
            slug: string;
            title: string;
            url: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            author: string;
        };
    }

export interface IVideosListRequestPayloadResponse {
    data: DataVideoType[];
    meta: Meta;
}
