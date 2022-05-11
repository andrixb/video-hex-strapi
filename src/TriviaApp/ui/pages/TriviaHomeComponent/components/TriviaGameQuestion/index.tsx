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
                display: 'flex',
                padding: '25px',
                width: 300,
                height: 300,
                textAlign: 'center',
                alignItems: 'center',
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
