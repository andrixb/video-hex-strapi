import { expect } from '@jest/globals';
import adaptVideosRequestPayload, { IVideosResults } from '.';
import { mockVideosPayload } from '../../../../../__tests__/__mocks__/videos/videos.mock';
import Video from '../../../domain/entities/Video';

describe('adaptVideosRequestPayload', () => {
    test('should adapt the request payload', () => {
        expect(adaptVideosRequestPayload(mockVideosPayload)).toStrictEqual({
            responseCode: mockVideosPayload.response_code,
            results: mockVideosPayload.results.map(
                (result: IVideosResults) =>
                    new Video(
                        // result.category,
                        // result.type,
                        // result.difficulty,
                        // result.question,
                        // result.correct_answer,
                        // result.incorrect_answers
                    )
            ),
        });
    });
});
