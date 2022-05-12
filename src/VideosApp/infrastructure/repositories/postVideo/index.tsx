import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import { VideoType } from '../../../domain/entities/Video';
import adaptVideoInsertRequestPayload from '../../adapters/adaptVideoInsertRequestPayload';

interface postVideoProps {
    body: VideoType;
}

export type VideoInsertResponse = {
    data: any;
};

export default async function postVideo({ body }: postVideoProps): Promise<VideoInsertResponse> {
    const BASE_API_URL = process.env['NEXT_PUBLIC_BASE_URL'];
    const API_API = 'api';
    const API_VIDEOS = 'videos';

    const { data } = await apiInstance.post<VideoInsertResponse>(
        `${BASE_API_URL}/${API_API}/${API_VIDEOS}`,
        {...adaptVideoInsertRequestPayload({ body })}
    );

    return data; 
}
