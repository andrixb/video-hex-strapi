import { expect } from '@jest/globals';
import adaptTriviaRequestPayload, { ITriviaQuestionsResults } from '.';
import { mockTrivialQuestionsPayload } from '../../../../../__tests__/__mocks__/triviaQuestions/triviaQuestions.mock';
import TriviaQuestion from '../../../domain/entities/TriviaQuestion';

describe('adaptTriviaRequestPayload', () => {
    test('should adapt the request payload', () => {
        expect(adaptTriviaRequestPayload(mockTrivialQuestionsPayload)).toStrictEqual({
            responseCode: mockTrivialQuestionsPayload.response_code,
            results: mockTrivialQuestionsPayload.results.map(
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
        });
    });
});
