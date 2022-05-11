import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';

import useGetTriviaQuestions from '../../../../../infrastructure/hooks/useGetTriviaQuestions';
import { TriviaQuestionsResponse } from '../../../../../infrastructure/repositories/getTriviaQuestions';

import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';

import { TriviaGameScoreComponent } from '../TriviaGameScore';
import { TriviaGameQuestionComponent } from '../TriviaGameQuestion';

import useAPIParams from '../../../../../infrastructure/hooks/useAPIParams';

export interface TriviaGameComponentProps {
    classes?: any;
}

export interface TriviaQuestionAnswered {
    questionNumber: number;
    answer: boolean;
}

export default function TriviaGameComponent({ classes }: TriviaGameComponentProps) {
    const [score, setScore] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<TriviaQuestionAnswered[]>([]);

    const [showScore, setShowScore] = useState<boolean>(false);
    const [startGame, setStartGame] = useState<boolean>(true);
    const [resetGame, setResetGame] = useState<boolean>(false);

    const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);
    const [triviaQuestionsError, setTriviaQuestionsError] = useState<unknown>();

    const { amount, type, difficulty } = useAPIParams();
    const receiveQuestions = useGetTriviaQuestions({ amount, type, difficulty });

    const startTriviaGame = async (amount: number, type: string, difficulty: string) => {
        try {
            const triviaQuestionsFetch: TriviaQuestionsResponse = await receiveQuestions();

            if (triviaQuestionsFetch && triviaQuestionsFetch.responseCode === 0) {
                setTriviaQuestions(triviaQuestionsFetch.results);
                setStartGame(true);
            }
        } catch (error) {
            setTriviaQuestionsError(error);
        }
    };

    const handleGetQuestions = useCallback(
        (amount: number, type: string, difficulty: string) => startTriviaGame(amount, type, difficulty),
        []
    );

    const handleAnswerOptionClick = (event: any) => {
        const { textContent } = event.target as HTMLButtonElement;

        if (textContent) {
            setScore(textContent === triviaQuestions[currentQuestion].correctAnswer ? score + 1 : score);
            setAnsweredQuestions([
                ...answeredQuestions,
                {
                    questionNumber: currentQuestion,
                    answer: textContent === triviaQuestions[currentQuestion].correctAnswer ? true : false,
                },
            ]);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < triviaQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleResetGame = (event: any) => {
        if (event) {
            setResetGame(true);
        }
    };

    useEffect(() => {
        setShowScore(false);
        setStartGame(false);
        setTriviaQuestions([]);
    }, [resetGame]);

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
            {!startGame ? (
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-evenly',
                    height: 500,
                }}>
                    <Typography variant="h2"> Welcome to the Trivia Challenge</Typography>
                    <Typography variant="body1"> You will be presented with 10 True or False questions</Typography>
                    <Typography variant="body1"> Can you score 100%?</Typography>
                    <Button variant="contained" onClick={() => handleGetQuestions(amount, type, difficulty)}>
                        Begin
                    </Button>
                </Box>
            ) : (
                <></>
            )}

            {showScore && startGame ? (
                <TriviaGameScoreComponent
                    score={score}
                    triviaQuestions={triviaQuestions}
                    answeredQuestions={answeredQuestions}
                    onNewGame={handleResetGame}
                />
            ) : (
                <></>
            )}

            {triviaQuestions.length > 0 && startGame && !showScore ? (
                <>
                    <TriviaGameQuestionComponent
                        category={triviaQuestions[currentQuestion].category}
                        question={triviaQuestions[currentQuestion].question}
                        currentQuestion={currentQuestion}
                        totalQuestionsNumber={triviaQuestions.length}
                    />

                    <ButtonGroup onClick={handleAnswerOptionClick}>
                        <Button>True</Button>
                        <Button>False</Button>
                    </ButtonGroup>
                </>
            ) : (
                <></>
            )}

            {triviaQuestionsError ? <Typography>triviaQuestionsError</Typography> : <></>}
        </Box>
    );
}
