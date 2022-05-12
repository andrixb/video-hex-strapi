import React from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import YouTube from 'react-youtube';
import { Box } from '@mui/system';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export interface VideoPlayerProps {
    videoId: string | string[];
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    
    return (
        <Box component="div">
            {videoId ? (
                <YouTube videoId={videoId as string} />
            ) : (
                <></>
            )}
            <Link href={`/videos`}>
                <IconButton aria-label="back to videos list">
                    <ArrowCircleLeftIcon />
                </IconButton>
            </Link>
        </Box>
    );
}
