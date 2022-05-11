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
    <Box component="div" sx={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'stretch',
    }}>
        <Typography>You scored {score} out of {triviaQuestions.length}</Typography>
        <List>
        <>    
            {answeredQuestions.map((answeredQuestion, index) => 
                <ListItem key={index}>
                    <Typography variant="body2">{answeredQuestion.answer === true ? '+' : '-'}</Typography>
                    <Typography variant="body2">{convertSpecialCharacters(triviaQuestions[answeredQuestion.questionNumber].question)}</Typography>
                </ListItem>
            )}
        </>
        </List>
        <Button variant="contained" onClick={(event) => onNewGame(event)} data-test="new-game-btn">Play Again</Button>
    </Box>
);
