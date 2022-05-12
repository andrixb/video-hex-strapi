import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Button } from '@mui/material';

import useGetVideosList from '../../../../../infrastructure/hooks/useGetVideosList';
import { VideosListResponse } from '../../../../../infrastructure/repositories/getVideosList';

import VideoType from '../../../../../domain/entities/Video';
import MetaType from '../../../../../domain/entities/Meta';

import { VideoCard } from '../VideoCard';
import { useVideosHomeComponentStyles } from '../../styles/VideosHomeComponent.style';

export interface VideosListComponentProps {
}

export default function VideosListComponent({}: VideosListComponentProps) {
    const classes = useVideosHomeComponentStyles();
    const [videosList, setVideosList] = useState<VideoType[]>([]);
    const [paginationInfo, setPaginationInfo] = useState<MetaType>();
    const [videosListError, setVideosListError] = useState<unknown>();

    const receiveVideosList = useGetVideosList();

    const showVideosList = async () => {
        try {
            const videosListFetch: VideosListResponse = await receiveVideosList();

            if (videosListFetch) {
                setVideosList(videosListFetch.data);
                setPaginationInfo(videosListFetch.meta);
            }
        } catch (error) {
            setVideosListError(error);
        }
    };

    useEffect(() => {
        showVideosList();
    }, []);

    return (
        <Box component="div">
            <Typography variant="h2">Videos List</Typography>

            <Box component="div" className={classes.addVideoBtnContainer}>
                <Link href="/videos/insert">
                    <Button variant="outlined">Insert new video</Button>
                </Link>
            </Box>

            {videosList ? (
                <Grid container spacing={3}>
                    {videosList.map((video: VideoType, index: number) => (
                        <Grid item xs={8} key={index}>
                            <VideoCard video={video} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <></>
            )}

            {videosListError ? <Typography>Videos List Error</Typography> : <></>}
        </Box>
    );
}
