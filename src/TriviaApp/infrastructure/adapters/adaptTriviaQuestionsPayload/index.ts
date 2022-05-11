import TriviaQuestion from "../../../domain/entities/TriviaQuestion";

export interface TriviaQuestionsPayloadResponse {
    response_code: number;
    results: TriviaQuestion[];
} 

export default function adaptTriviaQuestionsPayload(data: TriviaQuestionsPayloadResponse) {
  return {
    responseCode: data.response_code,
    results: data.results,
  };
}
