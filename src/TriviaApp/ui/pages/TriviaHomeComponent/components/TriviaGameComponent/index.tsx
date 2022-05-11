import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';

import useGetTriviaQuestions from '../../../../../infrastructure/hooks/useGetTriviaQuestions';
import { TriviaQuestionsResponse } from '../../../../../infrastructure/repositories/getTriviaQuestions';

import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';

import { TriviaGameScoreComponent } from '../TriviaGameScore';
import { TriviaGameQuestionComponent } from '../TriviaGameQuestion';

export interface TriviaGameComponentProps {
    classes?: any;
}

export default function TriviaGameComponent({ classes }: TriviaGameComponentProps) {
    const [score, setScore] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);

    const [amount] = useState<number>(10);
    const [type] = useState<string>('boolean');
    const [difficulty] = useState<string>('hard');

    const [triviaQuestionsError, setTriviaQuestionsError] = useState<unknown>();

    const { t } = useTranslation();
    const receiveQuestions = useGetTriviaQuestions({ amount, type, difficulty });

    const startTriviaGame = async (amount: number, type: string, difficulty: string) => {
        try {
            const triviaQuestionsFetch: TriviaQuestionsResponse = await receiveQuestions();

            if (triviaQuestionsFetch && triviaQuestionsFetch.responseCode === 0) {
                setTriviaQuestions(triviaQuestionsFetch.results);
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

        if (textContent && textContent === triviaQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < triviaQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <Box component="div">
            <Stack spacing={2} sx={{ width: 300 }}>
                <Button variant="contained" onClick={() => handleGetQuestions(amount, type, difficulty)}>
                    {t('react_seed.containers.trivialGame.startGame')}
                </Button>

                {showScore ? <TriviaGameScoreComponent score={score} questions={triviaQuestions} /> : <></>}

                {triviaQuestions.length > 0 ? (
                    <>
                        <TriviaGameQuestionComponent
                            category={triviaQuestions[currentQuestion].category}
                            question={triviaQuestions[currentQuestion].question}
                            currentQuestion={currentQuestion}
                            totalQuestionsNumber={triviaQuestions.length}
                        />

                        <ButtonGroup variant="contained" onClick={handleAnswerOptionClick}>
                            <Button>True</Button>
                            <Button>False</Button>
                        </ButtonGroup>
                    </>
                ) : (
                    <></>
                )}
                {triviaQuestionsError ? <Typography>triviaQuestionsError</Typography> : <></>}
            </Stack>
        </Box>
    );
}
