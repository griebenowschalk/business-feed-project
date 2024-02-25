import { Grid, Button, Box } from '@mui/material';
import React, { Fragment } from 'react';
import { TAB_ITEMS } from '../../staticcontent/NavTabItems';
import { selectedFilterItemUpdate } from '../../redux/slice/feedSlice';
import { useDispatch, useSelector } from 'react-redux';

import './NavTabs.scss';
import { TabItem } from '../../types/navTab.types';
import { strings } from '../../localisation/strings';

interface Props {

}

function NavTabs(_props: Props) {
    const spacing = 12 / TAB_ITEMS.length;
    const dispatch = useDispatch();
    const { selectedFilterItem } = useSelector((state: any) => state.feed);

    const isSelected = (item: TabItem) => {
        return item.value === selectedFilterItem;
    }

    function isSelectedStyle(item: TabItem) {
        return `button${isSelected(item) ? '--selected' : ''}`
    }

    function updateSelectedFilterItem(item: TabItem) {
        let filterValue = strings.all;
        if (!isSelected(item)) filterValue = item.value;
        dispatch(selectedFilterItemUpdate(filterValue));
    }

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
                                            <Button className={isSelectedStyle(item)} onClick={() => updateSelectedFilterItem(item)}>{item.name}</Button>
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
