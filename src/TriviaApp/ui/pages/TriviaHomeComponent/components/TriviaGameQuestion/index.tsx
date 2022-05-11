import React from 'react';
import { Typography } from '@mui/material';
import convertSpecialCharacters from '../../../../../../Shared/infrastructure/helpers/convertSpecialCharacters';
import { Box } from '@mui/system';

interface TriviaGameQuestionProps {
    category: string;
    question: string;
    questionNumber: number;
    totalQuestionsNumber: number;
}

export default function TriviaGameQuestion({
    category,
    question,
    questionNumber,
    totalQuestionsNumber,
}: TriviaGameQuestionProps) {
    return (
        <>
            <Typography variant="h3" align="center">{category}</Typography>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    padding: '25px',
                    width: 300,
                    height: 300,
                    textAlign: 'center',
                    alignItems: 'center',
                    border: '1px solid black'
                }}
            >
                <Typography>{convertSpecialCharacters(question)}</Typography>
            </Box>
            <Typography variant="body2">
                {questionNumber + 1} of {totalQuestionsNumber}
            </Typography>
        </>
    );
}
