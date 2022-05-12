import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import { getEnvironmentVariable } from '../../../../Shared/infrastructure/types/EnvironmentVariables';
import Meta from '../../../domain/entities/Meta';
import Video from '../../../domain/entities/Video';
import adaptVideosListRequestPayload from '../../adapters/adaptVideosRequestPayload';
import { IVideosListRequestPayloadResponse } from '../../interfaces/IVideosListRequestPayloadResponse';

interface getVideosListProps {}

export type VideosListResponse = {
    data: Video[];
    meta: Meta;
};

export default async function getVideosList(): Promise<VideosListResponse> {
    // const BASE_API_URL = getEnvironmentVariable('BASE_URL');
    const BASE_API_URL = 'http://localhost:1337'
    const API_API = 'api';
    const API_VIDEOS = 'videos';

    const { data } = await apiInstance.get<IVideosListRequestPayloadResponse>(
        `${BASE_API_URL}/${API_API}/${API_VIDEOS}`,
        {}
    );

    return adaptVideosListRequestPayload(data); 
}
