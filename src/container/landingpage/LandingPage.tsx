import React from 'react';
import withRouter, { Router } from '../../components/hoc/withRouter';
import { Route, Routes } from 'react-router-dom'
import { DRAWER_ITEMS } from '../../staticcontent/DrawerItems';

import NavigationAware from '../../components/navigation/NavigationAware';
import NotFound from '../notfound/NotFound';
import Home from '../home/Home';

import './LandingPage.scss';

interface Props {

}

function LandingPage(_props: Props) {
    return (
        <NavigationAware>
            <Routes>
                <Route path={DRAWER_ITEMS[0].route} element={<Home />} />
                <Route path={DRAWER_ITEMS[1].route} element={<NotFound />} />
                <Route path={DRAWER_ITEMS[2].route} element={<NotFound />} />
                <Route path={DRAWER_ITEMS[3].route} element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </NavigationAware>
    );
};

export default LandingPage;
