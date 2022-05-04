import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Autocomplete, AutocompleteRenderInputParams, Stack, TextField, Typography } from '@mui/material';
import Community from '../../../../../domain/entities/Community';
import useGetCommunities from '../../../../../infrastructure/hooks/useGetCommunities';
import { CommunitiesResponse } from '../../../../../infrastructure/repositories/getCommunities';
import { jsonToArray } from '../../../../../../Shared/infrastructure/helpers/convertJsonToArray';

export interface SearchBarProps {
    classes?: any;
}

export default function SearchBar({ classes }: SearchBarProps) {
    const [communities, setCommunities] = useState<Community[]>();
    const [keyword, setKeyword] = useState<string>('');
    const [searchError, setSearchError] = useState<unknown>();
    const { t } = useTranslation();
    const findCommunities = useGetCommunities({ keyword });

    const activateSearch = async (keyword: string) => {
        try {
            const communitiesFetch: CommunitiesResponse = await findCommunities();

            if (communitiesFetch) {
                const convertedSelectedCommunities = jsonToArray(communitiesFetch);

                const selectedCommunities = convertedSelectedCommunities.filter((community: Community) =>
                    community.name.includes(keyword) || community.seedPhrase?.includes(keyword)
                );

                setCommunities(selectedCommunities);
            }
        } catch (error) {
            setSearchError(error);
        }
    };

    const handleChange = (event: any) => {
        const { value } = (event.target as HTMLInputElement);
        setKeyword(value);
        handleSearch(value);
    }

    const handleSearch = useCallback(
        debounce((keyword) => activateSearch(keyword), 500),
    []);

    return (
        <div>
            <Stack spacing={2} sx={{ width: 300 }}>
                {searchError ? <Typography>searchError</Typography> : <></>}
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={communities ? communities.map((community: Community) => community.name) : ['']}
                    noOptionsText={t('react_seed.containers.searchView.nothingHasBeenFound')}
                    onInputChange={handleChange}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                        <TextField
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
        </div>
    );
}
