import { jest, expect } from '@jest/globals';
import postVideo from '.';
import { videosAxiosResponseMock } from '../../../../../__tests__/__mocks__/axiosResponse/videosAxiosResponse.mock';

import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';

const postStub = jest.spyOn(apiInstance, 'post');

describe('getVideos', () => {
    it('fetches successfully data from an API', async () => {
        // postStub.mockImplementationOnce(async () => videoAxiosResponseMock());

        // const response = await postVideo();

        // expect(response).toEqual(
        //     videosAxiosResponseMock().data
        // );
    });
});
