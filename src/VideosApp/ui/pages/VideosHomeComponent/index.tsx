import React from 'react';

import { useVideosHomeComponentStyles } from './styles/VideosHomeComponent.style';
import VideosListComponent from './components/VideosListComponent';

interface VideosListComponentProps {}

export default function VideosHomeComponent(props: VideosListComponentProps) {
    const classes = useVideosHomeComponentStyles();

    return (
        <main className={classes.content}>
            <VideosListComponent />
        </main>
    );
}
