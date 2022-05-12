import { fetchVideos } from '../../domain/useCases/fetchVideos';

interface useGeVideosProps {

}

export default function useGetVideos() {
    return () => fetchVideos();
}
