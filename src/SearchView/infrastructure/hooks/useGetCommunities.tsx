import { fetchCommunities } from '../../domain/useCases/fetchCommunities';

interface useGetCommunitiesProps {
    keyword: string;
}

export default function useGetCommunities({
    keyword
}: useGetCommunitiesProps) {
    return () => fetchCommunities({ keyword });
}
