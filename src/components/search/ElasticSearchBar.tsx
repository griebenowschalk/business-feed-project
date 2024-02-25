import { useEffect, useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import { strings } from '../../localisation/strings';
import { isEmpty } from 'lodash'; // Import lodash library

import SearchIcon from '@mui/icons-material/SearchRounded';
import ClearIcon from '@mui/icons-material/Clear';

import './ElasticSearchBar.scss';

interface Props {
    value?: string | undefined;
    onChange: (value: string) => void;
    placeholder: string;
    onRef?: (_ref: NonNullable<unknown>) => void;
    initialValue?: string;
}

function ElasticSearchBar(props: Props) {
    const { value, onChange, placeholder, initialValue } = props;
    const [searchTerm, setSearchTerm] = useState(
        initialValue ? initialValue : '',
    );

    useEffect(() => {
        if (props?.onRef) {
            props.onRef({
                clear,
            });
        }
    }, []);

    function clear() {
        setSearchTerm('');
    }

    return (
        <div className="elastic-search-bar-root">
            <div className="rounded-container">
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <InputBase
                    className="input"
                    name="searchbar"
                    placeholder={placeholder}
                    value={value === undefined ? searchTerm : value}
                    inputProps={{ 'aria-label': strings.search }}
                    onChange={(e: any) => {
                        const value: string = e.target.value;
                        setSearchTerm(value);
                        onChange(value);
                    }}
                />
                {!isEmpty(value) && (
                    <IconButton
                        onClick={() => {
                            onChange('');
                        }}
                    >
                        <ClearIcon />
                    </IconButton>
                )}
            </div>
        </div>
    );
}

export default ElasticSearchBar;
