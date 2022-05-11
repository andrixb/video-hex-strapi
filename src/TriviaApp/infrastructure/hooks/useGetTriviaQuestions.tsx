import { fetchTriviaQuestions } from '../../domain/useCases/fetchTriviaQuestions';

interface useGetTriviaQuestionsProps {
    amount: number;
    difficulty: string;
    type: string;
}

export default function useGetTriviaQuestions({
    amount, difficulty, type
}: useGetTriviaQuestionsProps) {
    return () => fetchTriviaQuestions({ amount, difficulty, type });
}
