import React, { useState, useRef, MutableRefObject } from 'react';
import withRouter, { Router } from '../../components/hoc/withRouter';
import { strings } from '../../localisation/strings';

import ElasticSearchBar from '../../components/search/ElasticSearchBar';

import '../../scss/global.scss'
import './Home.scss'
import { Grid } from '@mui/material';

interface Props {
    router: Router;
}

function Home(props: Props) {
    const { router } = props;
    const [textSearch, setTextSearch] = useState<string>('');
    const searchBarRef = useRef(null);

    return (
        <Grid className='home-container' container>
            <Grid item className='bar'>
                <ElasticSearchBar
                    placeholder={strings.search}
                    onChange={(searchQuery) => {
                        setTextSearch(searchQuery)
                    }}
                    onRef={(ref: any) => {
                        searchBarRef.current = ref;
                    }}
                    initialValue={textSearch}
                />
            </Grid>
        </Grid>
    );
};

export default withRouter(Home);
