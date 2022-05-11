import { Box } from '@mui/material';
import React from 'react';
import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';

interface TriviaGameScoreComponentProps {
    score: number;
    questions: TriviaQuestion[];
}

export const TriviaGameScoreComponent = ({score, questions }: TriviaGameScoreComponentProps) => (
    <Box component="div" className='score-section'>
        You scored {score} out of {questions.length}
    </Box>
);
