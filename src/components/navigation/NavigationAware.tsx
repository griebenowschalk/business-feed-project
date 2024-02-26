import { ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';
import { responsiveNavigationStyle } from '../../helpers/stylingHelper';
import { useTheme } from '@emotion/react';

import MainToolbar from './MainToolbar';
import NavBarContent from './NavBarContent';
import useCustomStyles from '../../hooks/useCustomStyles';

import './Navigation.scss';

interface NavigationAwareProps {
    children: ReactNode;
}

/** 
 * Navigation aware component that renders the main toolbar and the navigation drawer and
 * wraps the child components in a responsive container
 */
function NavigationAware(props: NavigationAwareProps) {
    const { children } = props;
    const isMobile = useMediaQuery('(max-width:599px)'); //600px is sm
    const classes = useCustomStyles(responsiveNavigationStyle, useTheme());

    function renderDrawer(isMobile: boolean) {
        return <NavBarContent isMobile={isMobile} />;
    }

    return (
        <div className="responsive-container">
            <MainToolbar />
            <main className={classes.toolbarAwareContainer}>
                <nav className={classes.drawer}>{renderDrawer(isMobile)}</nav>
                <div className={classes.content}>{children}</div>
            </main>
        </div>
    );
}

export default NavigationAware;
