import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import convertSpecialCharacters from '../../../../../../Shared/infrastructure/helpers/convertSpecialCharacters';

interface TriviaGameQuestionComponentProps {
    category: string;
    question: string;
    currentQuestion: number;
    totalQuestionsNumber: number;
}

export const TriviaGameQuestionComponent = ({
    category,
    question,
    currentQuestion,
    totalQuestionsNumber,
}: TriviaGameQuestionComponentProps) => (
    <>
        <Typography variant="h3" align="center">
            {category}
        </Typography>
        <Box
            component="div"
            sx={{
                padding: '25px',
                height: 250,
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                border: '1px solid black',
            }}
        >
            <Typography>{convertSpecialCharacters(question)}</Typography>
        </Box>
        <Typography variant="body2">
            {currentQuestion + 1} of {totalQuestionsNumber}
        </Typography>
    </>
);
