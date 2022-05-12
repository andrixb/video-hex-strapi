import { expect } from '@jest/globals';
import adaptVideoInsertRequestPayload from '.';
import { mockVideosListPayload } from '../../../../../__tests__/__mocks__/videos/videosList.mock';
import Video from '../../../domain/entities/Video';

describe('adaptVideoInsertRequestPayload', () => {
    test('should adapt the request payload', () => {
        expect(adaptVideoInsertRequestPayload()).toStrictEqual({
            data: {
                ...body,
                slug: `${body.title}-${body.author}`,
                isPublic: true,
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now()),
                publishedAt: new Date(Date.now()),
            },
        })
        // expect(adaptVideosRequestPayload(mockVideosListPayload)).toStrictEqual({
        //     data: mockVideosListPayload.data.map(
        //         (result) =>
        //             new Video(
        //                 result.id,
        //                 result.attributes.title,
        //                 result.attributes.slug,
        //                 result.attributes.url,
        //                 result.attributes.isPublic,
        //                 result.attributes.author
        //             )
        //     ),
        //     meta: mockVideosListPayload.meta,
        // });
    });
});
