import { fetchVideosList } from '../../domain/useCases/fetchVideosList';

interface useGetVideosListProps {

}

export default function useGetVideosList() {
    return () => fetchVideosList();
}
