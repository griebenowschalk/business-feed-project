import React, { useState } from 'react'
import { ClassNameMap, Drawer, useMediaQuery } from '@mui/material'
import { responsiveNavigationStyle } from '../../helpers/stylingHelper';
import { useTheme } from '@emotion/react';

import MainToolbar from './MainToolbar'
import NavBarContent from './NavBarContent'
import useCustomStyles from '../../hooks/useCustomStyles';

import './Navigation.scss'

type Props = {
    children: React.ReactNode
}

function renderDrawer(classes: ClassNameMap, isMobile: boolean) {
    return (
        <Drawer
            classes={{
                paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
        >
            <NavBarContent isMobile={isMobile}/>
        </Drawer>
    )
}

function ResponsiveNavigation(props: Props) {
    const { children } = props;
    const isMobile = useMediaQuery('(max-width:599px)') //600px is sm
    const classes = useCustomStyles(responsiveNavigationStyle, useTheme());

    return (
        <div className={classes.root}>
            <MainToolbar/>
            <nav className={classes.drawer}>
                {renderDrawer(classes, isMobile)}
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    )
}

export default ResponsiveNavigation
