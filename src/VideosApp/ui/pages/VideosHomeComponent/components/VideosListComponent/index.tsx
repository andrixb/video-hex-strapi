import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

import useGetVideos from '../../../../../infrastructure/hooks/useGetVideos';
import { VideosResponse } from '../../../../../infrastructure/repositories/getVideos';

import Video from '../../../../../domain/entities/Video';


import useAPIParams from '../../../../../infrastructure/hooks/useAPIParams';

export interface VideosListComponentProps {
    classes?: any;
}


export default function TriviaGameComponent({ classes }: VideosListComponentProps) {
    // const [score, setScore] = useState<number>(0);
    // const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    // const [answeredQuestions, setAnsweredQuestions] = useState<TriviaQuestionAnswered[]>([]);

    // const [showScore, setShowScore] = useState<boolean>(false);
    // const [startGame, setStartGame] = useState<boolean>(true);
    // const [resetGame, setResetGame] = useState<boolean>(false);

    const [videosList, setVideosList] = useState<Video[]>([]);
    const [videosListError, setVideosListError] = useState<unknown>();

    // const { amount, type, difficulty } = useAPIParams();
    const receiveVideos = useGetVideos();

    const showVideosList = async () => {
        try {
            const videosFetch: VideosResponse = await receiveVideos();

            if (videosFetch) {
                setVideosList(videosFetch.data);
            }
        } catch (error) {
            setVideosListError(error);
        }
    };

    const handleGetVideosList = useCallback(
        () => showVideosList(),
        []
    );

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
                flexFlow: 'column',
                width: 500,
                alignItems: 'center',
            }}
        >
            <Button onClick={handleGetVideosList}>VIDEOS</Button>

            {videosListError ? <Typography>videosListError</Typography> : <></>}
        </Box>
    );
}
