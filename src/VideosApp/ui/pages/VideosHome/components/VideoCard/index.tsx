import React from 'react';
import Link from 'next/link';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Avatar, Card, CardActions, CardHeader, IconButton, Typography } from '@mui/material';
import VideoType from '../../../../../domain/entities/Video';
import { useVideosHomeComponentStyles } from '../../styles/VideosHomeComponent.style';
import { extractVideoIdFromUrl } from '../../../../../infrastructure/helpers/extractVideoIdfromUrl';

export interface VideoCardProps {
    video: VideoType;
}

export const VideoCard = ({ video }: VideoCardProps) => {
    const classes = useVideosHomeComponentStyles();
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        <Typography variant="h5">{video.title}</Typography>
                    </Avatar>
                }
                title={<Typography variant="h5">{video.title}</Typography>}
                subheader={<Typography variant="subtitle1">{video.author}</Typography>}
            />
            <CardActions disableSpacing className={classes.playButton}>
                <Link
                    as={`/videos/player/${video.slug}`}
                    href={`/videos/player/${video.slug}?videoId=${extractVideoIdFromUrl(video.url)}`}
                >
                    <IconButton aria-label="play video">
                        <PlayCircleIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
};
