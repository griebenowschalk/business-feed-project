import { theme } from '../../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ResponsiveNavigation from './ResponsiveNavigation';
import './Navigation.scss'

interface Props {
    children: any
}

/**
 * NOTE: Add a single child component only
 */
function NavigationAware(props: Props) {
    return (
        <div className='responsive-container'>
            <ThemeProvider theme={theme}>
                <ResponsiveNavigation>{props.children}</ResponsiveNavigation>
            </ThemeProvider>
        </div>
    )
}

export default NavigationAware
