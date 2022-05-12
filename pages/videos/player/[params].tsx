import React from 'react';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import VideoPlayer from '../../../src/VideosApp/ui/pages/VideoPlayer';

const VideosPlayerPage: NextPage = () => {
    const router = useRouter();
    const { videoId } = router.query;

    return <VideoPlayer videoId={videoId ? videoId : ''} />;
};

export default VideosPlayerPage;
