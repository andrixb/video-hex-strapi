import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { useVideosInsertStyles } from '../styles/VideoInsert.style';

export interface IFormInput {
    title: string;
    author: string;
    url: string;
    slug: string;
    isPublic: boolean;
}

export interface VideoInserFormProps {
    handleSubmit: Function;
    onSubmit: Function;
    control: Control<IFormInput, any>;
}

export const VideoInsertForm = ({ handleSubmit, onSubmit, control }: VideoInserFormProps) => {
    const classes = useVideosInsertStyles();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item md={8}>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="Video Title"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{ required: 'Title is required' }}
                />
            </Grid>
            <Grid item md={8}>
                <Controller
                    name="author"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="Author"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                />
            </Grid>
            <Grid item md={8}>
                <Controller
                    name="url"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="URL"
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{
                        required: 'URL is required',
                        pattern: {
                            value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g,
                            message: 'Insert a valid URL',
                        },
                    }}
                />
            </Grid>

            <Grid item md={8} className={classes.addBtn}>
                <Button type="submit" variant="outlined" color="primary">
                    Add Video
                </Button>
            </Grid>
        </form>
    );
};
