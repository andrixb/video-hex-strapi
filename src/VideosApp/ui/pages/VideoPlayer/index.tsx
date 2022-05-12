import React from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export interface VideoPlayerProps {
    videoId: string | string[];
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    return (
        <Box component="div" sx={{
            width: '100%',
            height: 500,
        }}>
            {videoId ? ( 
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
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
