import React from 'react';
import { Container } from '@mui/material';

import { useSearchViewComponentStyles } from './styles/SearchViewComponent.style';

import SearchBar from './components/SearchBar';

interface SearchViewComponentProps {
};


export default function SearchViewComponent(props: SearchViewComponentProps) {
    const classes = useSearchViewComponentStyles();

    return (
        <Container sx={{ display: 'flex' }}>
            <main className={classes.content}>
                <SearchBar />
            </main>
        </Container>
    );
}
