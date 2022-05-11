import React from 'react';
import { Container } from '@mui/material';

import { useTriviaHomeComponentStyles } from './styles/TriviaHomeComponent.style';
import TriviaGameComponent from './components/TriviaGameComponent';


interface TriviaHomeComponentProps {
};


export default function TriviaHomeComponent(props: TriviaHomeComponentProps) {
    const classes = useTriviaHomeComponentStyles();

    return (
        <Container>
            <main className={classes.content}>
                <TriviaGameComponent />
            </main>
        </Container>
    );
}
