import getCommunities, { CommunitiesResponse } from '../../infrastructure/repositories/getCommunities';


export interface fetchCommunitiesProps {
    keyword: string;
}

export async function fetchCommunities({ keyword }: fetchCommunitiesProps): Promise<CommunitiesResponse> {
    return await getCommunities({ keyword });
}
