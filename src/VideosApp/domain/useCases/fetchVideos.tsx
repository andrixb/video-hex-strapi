import getVideos, { VideosResponse } from '../../infrastructure/repositories/getVideos';


export interface fetchVideosProps { }

export async function fetchVideos(): Promise<VideosResponse> {
    return await getVideos();
}
