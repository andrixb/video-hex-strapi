import { apiInstance } from '../../../../Shared/infrastructure/api/apiClient';
import Community from '../../../domain/entities/Community';

interface getCommunitiesProps {
   keyword: string;
}

export type CommunitiesResponse = {
    data?: Community[];
}

export default async function getCommunities({
    keyword
}: getCommunitiesProps): Promise<CommunitiesResponse> {
    const BASE_API_URL = 'http://localhost:3000/api';
    const COMMUNITIES_API = 'communities';
    const { data } = await apiInstance.get<CommunitiesResponse>(`${BASE_API_URL}/${COMMUNITIES_API}`, {});
    return data;
}
