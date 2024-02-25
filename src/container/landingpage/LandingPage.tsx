import { Route, Routes } from 'react-router-dom';
import { DRAWER_ITEMS } from '../../staticcontent/DrawerItems';

import NavigationAware from '../../components/navigation/NavigationAware';
import NotFound from '../notfound/NotFound';
import Home from '../home/Home';

function LandingPage() {
    return (
        <NavigationAware>
            <Routes>
                <Route path={DRAWER_ITEMS[0].route} element={<Home />} />
                <Route path={DRAWER_ITEMS[1].route} element={<NotFound />} />
                <Route path={DRAWER_ITEMS[2].route} element={<NotFound />} />
                <Route path={DRAWER_ITEMS[3].route} element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </NavigationAware>
    );
}

export default LandingPage;
