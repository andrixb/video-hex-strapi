import { expect } from '@jest/globals';
import adaptVideosRequestPayload from '.';
import { mockVideosListPayload } from '../../../../../__tests__/__mocks__/videos/videosList.mock';
import Video from '../../../domain/entities/Video';


describe('adaptVideosRequestPayload', () => {
    test('should adapt the request payload', () => {
        expect(adaptVideosRequestPayload(mockVideosListPayload)).toStrictEqual({
            data: mockVideosListPayload.data.map(
                (result) =>
                    new Video(
                        result.id,
                        result.attributes.title,
                        result.attributes.slug,
                        result.attributes.url,
                        result.attributes.isPublic,
                        result.attributes.author
                    )
            ),
            meta: mockVideosListPayload.meta,
        });
    });
});
