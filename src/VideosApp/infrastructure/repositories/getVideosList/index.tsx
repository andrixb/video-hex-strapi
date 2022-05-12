import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import Meta from '../../../domain/entities/Meta';
import Video from '../../../domain/entities/Video';
import adaptVideosListRequestPayload from '../../adapters/adaptVideosRequestPayload';
import { IVideosListRequestPayloadResponse } from '../../interfaces/IVideosListRequestPayloadResponse';

export type VideosListResponse = {
    data: Video[];
    meta: Meta;
};

export default async function getVideosList(): Promise<VideosListResponse> {
    const BASE_API_URL = process.env['NEXT_PUBLIC_BASE_URL'];
    const API_API = 'api';
    const API_VIDEOS = 'videos';

    const { data } = await apiInstance.get<IVideosListRequestPayloadResponse>(
        `${BASE_API_URL}/${API_API}/${API_VIDEOS}`,
        {}
    );

    return adaptVideosListRequestPayload(data); 
}
