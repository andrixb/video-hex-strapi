import { Box, Button, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import convertSpecialCharacters from '../../../../../../Shared/infrastructure/helpers/convertSpecialCharacters';
import TriviaQuestion from '../../../../../domain/entities/TriviaQuestion';
import { TriviaQuestionAnswered } from '../TriviaGameComponent';

interface TriviaGameScoreComponentProps {
    score: number;
    triviaQuestions: TriviaQuestion[];
    answeredQuestions: TriviaQuestionAnswered[];
    onNewGame: React.MouseEventHandler<HTMLButtonElement>;
}

export const TriviaGameScoreComponent = ({score, triviaQuestions, answeredQuestions, onNewGame }: TriviaGameScoreComponentProps) => (
    <Box component="div" className='score-section'>
        <Typography>You scored {score} out of {triviaQuestions.length}</Typography>
        <List>
        <>    
            {answeredQuestions.map((answeredQuestion, index) => 
                <ListItem key={index}>
                    <Typography variant="h5">{answeredQuestion.answer === true ? '+' : '-'}</Typography>
                    <Typography variant="body2">{convertSpecialCharacters(triviaQuestions[answeredQuestion.questionNumber].question)}</Typography>
                </ListItem>
            )}
        </>
        </List>
        <Button variant="contained" onClick={onNewGame}>Play Again</Button>
    </Box>
);
