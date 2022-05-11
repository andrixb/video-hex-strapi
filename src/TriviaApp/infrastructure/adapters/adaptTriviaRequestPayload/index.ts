import TriviaQuestion from '../../../domain/entities/TriviaQuestion';

export interface ITriviaRequestPayloadResponse {
    responseCode: number;
    results: TriviaQuestion[];
}

interface ITriviaQuestionsResults {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export default function adaptTriviaRequestPayload(data: any): ITriviaRequestPayloadResponse {
    return {
        responseCode: data.response_code,
        results: data.results.map(
            (result: ITriviaQuestionsResults) =>
                new TriviaQuestion(
                    result.category,
                    result.type,
                    result.difficulty,
                    result.question,
                    result.correct_answer,
                    result.incorrect_answers
                )
        ),
    };
}
