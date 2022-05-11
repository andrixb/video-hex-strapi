import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import TriviaQuestion from '../../../domain/entities/TriviaQuestion';
import adaptTriviaQuestionsPayload, { TriviaQuestionsPayloadResponse } from '../../adapters/adaptTriviaQuestionsPayload';

interface getTriviaQuestionsProps {
   amount?: number;
   difficulty?: string;
   type?: string;
}

export type TriviaQuestionsResponse = {
    responseCode: number;
    results: TriviaQuestion[];
}

export default async function getCommunities({
    amount = 10, difficulty = 'hard', type = 'boolean'
}: getTriviaQuestionsProps): Promise<TriviaQuestionsResponse> {
    const BASE_API_URL = 'https://opentdb.com/api.php';
    const API_PARAMS_AMOUNT = 'amount';
    const API_PARAMS_DIFFICULTY = 'difficulty';
    const API_PARAMS_TYPE = 'type';

    const { data } = await apiInstance.get<TriviaQuestionsPayloadResponse>(`
        ${BASE_API_URL}?${API_PARAMS_AMOUNT}=${amount}&${API_PARAMS_DIFFICULTY}=${difficulty}&${API_PARAMS_TYPE}=${type}
    `, {});
    return adaptTriviaQuestionsPayload(data);
}
