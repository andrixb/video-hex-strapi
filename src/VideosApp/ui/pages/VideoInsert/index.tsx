import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IconButton, Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useVideosInsertStyles } from './styles/VideoInsert.style';
import { IFormInput, VideoInsertForm } from './VideoInsertForm';
import usePostVideo from '../../../infrastructure/hooks/usePostVideo';

export interface VideoInsertProps {}

export default function VideoInsertComponent() {
    const classes = useVideosInsertStyles();
    const [body, setBody] = useState<any>();
    const { control, handleSubmit } = useForm<IFormInput>();
    
    const insertVideo = usePostVideo({ body });

    const onSubmit: SubmitHandler<IFormInput> = (body) => {
        setBody(body);
        insertVideo();
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Link href={`/videos`}>
                    <IconButton aria-label="back to videos list">
                        <ArrowCircleLeftIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item xs={10}>
                <Grid container spacing={2} className={classes.formContainer}>
                    <VideoInsertForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} />
                </Grid>
            </Grid>
        </Grid>
    );
}
