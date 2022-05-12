import Video from '../../../domain/entities/Video';


export interface IVideosRequestPayloadResponse {
   data: Video[];
}

export default function adaptTriviaRequestPayload(data: any): IVideosRequestPayloadResponse {
    return {
        // responseCode: data.response_code,
        // results: data.results.map(
        //     (result: IVideosResults) =>
        //         new Video(
                    // result.category,
                    // result.type,
                    // result.difficulty,
                    // result.question,
                    // result.correct_answer,
                    // result.incorrect_answers
        //         )
        // ),
    };
}
