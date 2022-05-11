import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';

import useGetTriviaQuestions from '../../../../../infrastructure/hooks/useGetTriviaQuestions';
import { TriviaQuestionsResponse } from '../../../../../infrastructure/repositories/getTriviaQuestions';

import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';

export interface TriviaGameComponentProps {
    classes?: any;
}

export default function TriviaGameComponent({ classes }: TriviaGameComponentProps) {
    const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>(['']);
    const [amount, setAmount] = useState<number>(10);
    const [type, setType] = useState<string>('boolean');
    const [difficulty, setDifficulty] = useState<string>('hard');
    const [triviaQuestionsError, setTriviaQuestionsError] = useState<unknown>();
    const { t } = useTranslation();
    const receiveQuestions = useGetTriviaQuestions({ amount, type, difficulty });

    const startTriviaGame = async (amount: number, type: string, difficulty: string) => {
        try {
            const triviaQuestionsFetch: TriviaQuestionsResponse = await receiveQuestions();

            if (triviaQuestionsFetch && triviaQuestionsFetch.responseCode === 0) {
                // const convertedSelectedCommunities = jsonToArray(communitiesFetch);

                // const selectedCommunities = convertedSelectedCommunities.filter((community: Community) =>
                //     community.name.includes(keyword) || community.seedPhrase?.includes(keyword)
                // );

                setTriviaQuestions(triviaQuestionsFetch.results);
            }
        } catch (error) {
            setTriviaQuestionsError(error);
        }
    };

    // const handleChange = (event: any) => {
    //     const { value } = (event.target as HTMLInputElement);
    //     setKeyword(value);
    //     handleSearch(value);
    // }

    const handleClick = useCallback(
        (amount: number, type: string, difficulty: string) => startTriviaGame(amount, type, difficulty),
        []
    );

    return (
        <div>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Button variant="contained" onClick={() => handleClick(amount, type, difficulty)}>
                    Start Game
                </Button>
                {triviaQuestions? triviaQuestions.map((result) => <Typography>{result.question}</Typography>): <></>}
                {triviaQuestionsError ? <Typography>triviaQuestionsError</Typography> : <></>}
            </Stack>
        </div>
    );
}
