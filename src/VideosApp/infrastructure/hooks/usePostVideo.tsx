import { VideoType } from '../../domain/entities/Video';
import { insertVideo } from '../../domain/useCases/insertVideo';


interface usePostVideoProps {
    body: VideoType;
}

export default function usePostVideo({ body }: usePostVideoProps) {
    return () => insertVideo({ body });
}
