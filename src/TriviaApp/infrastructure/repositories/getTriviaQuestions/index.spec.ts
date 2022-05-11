import { jest, expect } from '@jest/globals';
import getTriviaQuestions from '.';
import { triviaQuestionsAxiosResponseMock } from '../../../../../__tests__/__mocks__/axiosResponse/triviaQuestionsAxiosResponse.mock';

import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';

const postStub = jest.spyOn(apiInstance, 'post');

describe('getTriviaQuestions', () => {
    it('fetches successfully data from an API', async () => {
        postStub.mockImplementationOnce(async () => triviaQuestionsAxiosResponseMock());

        const response = await getTriviaQuestions({});

        expect(response).toEqual(
            triviaQuestionsAxiosResponseMock().data
        );
    });
});
