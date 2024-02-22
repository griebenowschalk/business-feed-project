import React from 'react';
import withRouter, { Router } from '../../components/hoc/withRouter';
import { Route, Routes } from 'react-router-dom'
import { DRAWER_ITEMS } from '../../components/navigation/NavBarContent';

import NavigationAware from '../../components/navigation/NavigationAware';
import NotFound from '../notfound/NotFound';

import './Home.scss';

interface Props {
    router: Router;
}

function Home(props: Props) {
    return (
        <NavigationAware>
            <Routes>
                <Route path={DRAWER_ITEMS[0].route} element={<div></div>} />
                <Route path={DRAWER_ITEMS[1].route} element={<div></div>} />
                <Route path={DRAWER_ITEMS[2].route} element={<div></div>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </NavigationAware>
    );
};

export default withRouter(Home);
