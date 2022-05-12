import getVideosList, { VideosListResponse } from '../../infrastructure/repositories/getVideosList';


export interface fetchVideosProps { }

export async function fetchVideosList(): Promise<VideosListResponse> {
    return await getVideosList();
}
