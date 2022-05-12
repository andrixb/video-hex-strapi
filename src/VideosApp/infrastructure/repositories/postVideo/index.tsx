import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import { getEnvironmentVariable } from '../../../../Shared/infrastructure/types/EnvironmentVariables';
import { VideoType } from '../../../domain/entities/Video';
import adaptVideoInsertRequestPayload from '../../adapters/adaptVideoInsertRequestPayload';

interface postVideoProps {
    body: VideoType;
}

export type VideoInsertResponse = {
    data: any;
};

export default async function postVideo({ body }: postVideoProps): Promise<VideoInsertResponse> {
    // const BASE_API_URL = getEnvironmentVariable('BASE_URL');
    const BASE_API_URL = 'http://localhost:1337'
    const API_API = 'api';
    const API_VIDEOS = 'videos';

    console.log({...adaptVideoInsertRequestPayload({ body })})

    const { data } = await apiInstance.post<VideoInsertResponse>(
        `${BASE_API_URL}/${API_API}/${API_VIDEOS}`,
        {...adaptVideoInsertRequestPayload({ body })}
    );

    return data; 
}
