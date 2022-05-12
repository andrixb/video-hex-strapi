import postVideo, { VideoInsertResponse } from '../../infrastructure/repositories/postVideo';
import { VideoType } from '../entities/Video';

export interface insertVideoProps { 
    body: VideoType;
}

export async function insertVideo({ body }: insertVideoProps): Promise<VideoInsertResponse> {
    return await postVideo({ body });
}
