import getTriviaQuestions, { TriviaQuestionsResponse } from '../../infrastructure/repositories/getTriviaQuestions';


export interface fetchTriviaQuestionsProps {
    amount: number;
    difficulty: string;
    type: string;
}

export async function fetchTriviaQuestions({ amount, difficulty, type }: fetchTriviaQuestionsProps): Promise<TriviaQuestionsResponse> {
    return await getTriviaQuestions({ amount, difficulty, type });
}
