import Video from '../../../domain/entities/Video';
import { IVideosListRequestPayloadResponse } from '../../interfaces/IVideosListRequestPayloadResponse';
import { VideosListResponse } from '../../repositories/getVideosList';

export default function adaptVideosListRequestPayload(
    response: IVideosListRequestPayloadResponse
): VideosListResponse {
    return {
        data: response.data.map(
            (result) =>
                new Video(
                    result.id,
                    result.attributes.title,
                    result.attributes.slug,
                    result.attributes.url,
                    result.attributes.isPublic,
                    result.attributes.author
                )
        ),
        meta: response.meta,
    };
}
