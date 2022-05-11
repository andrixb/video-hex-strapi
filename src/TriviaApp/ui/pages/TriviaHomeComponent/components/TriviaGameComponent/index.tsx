import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import useGetTriviaQuestions from '../../../../../infrastructure/hooks/useGetTriviaQuestions';
import { TriviaQuestionsResponse } from '../../../../../infrastructure/repositories/getTriviaQuestions';

import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';
import TriviaGameQuestion from '../TriviaGameQuestion';

export interface TriviaGameComponentProps {
    classes?: any;
}

export default function TriviaGameComponent({ classes }: TriviaGameComponentProps) {
    const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);
    const [amount, ] = useState<number>(10);
    const [type, ] = useState<string>('boolean');
    const [difficulty, ] = useState<string>('hard');
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

    const handleClick = useCallback(
        (amount: number, type: string, difficulty: string) => startTriviaGame(amount, type, difficulty),
        []
    );

    return (
        <div>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Button variant="contained" onClick={() => handleClick(amount, type, difficulty)}>
                    {t('react_seed.containers.trivialGame.startGame')}
                </Button>
                {   
                    triviaQuestions.length > 0 ? 
                        triviaQuestions.map(
                            (result, index) => 
                            <TriviaGameQuestion 
                                category={result.category} 
                                question={result.question} 
                                questionNumber={index} 
                                totalQuestionsNumber={triviaQuestions.length}
                            />
                            ): 
                        <></>
                }
                {triviaQuestionsError ? <Typography>triviaQuestionsError</Typography> : <></>}
            </Stack>
        </div>
    );
}
