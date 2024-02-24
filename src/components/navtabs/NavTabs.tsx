import { Grid, Button, Box } from '@mui/material';

import React, { Fragment } from 'react';
import { TAB_ITEMS } from '../../staticcontent/NavTabItems';

import './NavTabs.scss';

interface Props {

}

function NavTabs(_props: Props) {
    const spacing = 12 / TAB_ITEMS.length;
    return (
        <div className='tab-container'>
            <div className='tabs'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid container item spacing={1}>
                            <Fragment>
                                {TAB_ITEMS.map((item) => {
                                    return (
                                        <Grid key={item.id} item xs={spacing}>
                                            <Button className='button' onClick={item.onClick}>{item.name}</Button>
                                        </Grid>
                                    );
                                })}
                            </Fragment>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default NavTabs;
