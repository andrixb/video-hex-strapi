import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import Video from '../../../domain/entities/Video';
import adaptVideosRequestPayload, { IVideosRequestPayloadResponse } from '../../adapters/adaptVideosRequestPayload';

interface getVideosProps {}

export type VideosResponse = {
    data: Video[];
};

export default async function getVideos(): Promise<VideosResponse> {
    const BASE_API_URL = 'http://localhost';
    const API_PORT = '1337';
    const API_API = 'api';
    const API_VIDEOS = 'videos';

    const { data } = await apiInstance.get<IVideosRequestPayloadResponse>(
        `${BASE_API_URL}:${API_PORT}/${API_API}/${API_VIDEOS}`,
        {}
    );

    // return adaptVideosRequestPayload(data);
    return data;
}
