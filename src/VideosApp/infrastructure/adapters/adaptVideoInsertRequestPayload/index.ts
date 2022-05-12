import { VideoType } from '../../../domain/entities/Video';

export default function adaptVideoInsertRequestPayload({ body }: { body: VideoType }) {
    return {
        data: {
            title: body.title,
            author: body.author,
            slug: `${body.title}-${body.author}`,
            isPublic: true,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            publishedAt: new Date(Date.now()),
        },
    };
}
