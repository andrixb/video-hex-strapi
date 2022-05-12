import Meta from '../../domain/entities/Meta';

export interface IVideosListRequestPayloadResponse {
    data: [
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
    ];
    meta: Meta;
}
