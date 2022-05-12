import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    List,
    ListItem,
    Typography,
} from '@mui/material';

import useGetVideosList from '../../../../../infrastructure/hooks/useGetVideosList';
import { VideosListResponse } from '../../../../../infrastructure/repositories/getVideosList';

import VideoType from '../../../../../domain/entities/Video';
import MetaType from '../../../../../domain/entities/Meta';

import useAPIParams from '../../../../../infrastructure/hooks/useAPIParams';
import Video from '../../../../../domain/entities/Video';
import Link from 'next/link';

export interface VideosListComponentProps {
    classes?: any;
}

export default function VideosListComponent({ classes }: VideosListComponentProps) {
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

    // useCallback(() => showVideosList(),[]);

    // const handleAnswerOptionClick = (event: any) => {
    //     const { textContent } = event.target as HTMLButtonElement;

    //     if (textContent) {
    //         setScore(textContent === triviaQuestions[currentQuestion].correctAnswer ? score + 1 : score);
    //         setAnsweredQuestions([
    //             ...answeredQuestions,
    //             {
    //                 questionNumber: currentQuestion,
    //                 answer: textContent === triviaQuestions[currentQuestion].correctAnswer ? true : false,
    //             },
    //         ]);
    //     }

    //     const nextQuestion = currentQuestion + 1;

    //     if (nextQuestion < triviaQuestions.length) {
    //         setCurrentQuestion(nextQuestion);
    //     } else {
    //         setShowScore(true);
    //     }
    // };

    // const handleResetGame = (event: any) => {
    //     if (event) {
    //         setResetGame(true);
    //     }
    // };

    // useEffect(() => {
    //     setShowScore(false);
    //     setStartGame(false);
    //     setScore(0);
    //     setTriviaQuestions([]);
    //     setAnsweredQuestions([]);
    //     setCurrentQuestion(0);
    //     setResetGame(false);
    // }, [resetGame]);

    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            {videosList ? (
                <Grid container spacing={3}>
                    {videosList.map((video: VideoType, index: number) => (
                        <Grid item xs={8} key={index}>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                            <Typography variant="h5">{video.title[0]}</Typography>
                                        </Avatar>
                                    }
                                    action={<IconButton aria-label="settings">{/* <MoreVertIcon /> */}</IconButton>}
                                    title={video.title}
                                    subheader={video.author}
                                />
                                <CardMedia
                                    component="image"
                                    height="194"
                                    src={`https://youtube.googleapis.com/youtube/v3/search?url=${video.url}`}
                                    // alt="Paella dish"
                                />
                                <CardActions disableSpacing>
                                    <Link href={`/player/${video.slug}`}>
                                        <IconButton aria-label="add to favorites">
                                            {/* <FavoriteIcon /> */}
                                        </IconButton>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <></>
            )}

            {videosListError ? <Typography>videosListError</Typography> : <></>}
        </Box>
    );
}
