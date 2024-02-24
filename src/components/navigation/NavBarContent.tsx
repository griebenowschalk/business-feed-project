import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { strings } from '../../localisation/strings'
import { NavDrawerItem } from '../../types/navBar.types'
import { selectedDrawerItemUpdate } from '../../redux/slice/navbarSlice';
import withRouter, { Router } from '../hoc/withRouter';
import { findURLRelatingDrawerItem, navigateTo } from '../../helpers/navigationHelper';
import { BottomNavigation, BottomNavigationAction, Drawer } from '@mui/material';
import { NAV_DRAWER_WIDTH } from '../../theme/theme';
import { DRAWER_ITEMS } from '../../staticcontent/DrawerItems'

import './Navigation.scss'

interface Props {
    router: Router,
    isMobile: boolean
}

function NavBarContent(props: Props) {
    const { router, isMobile } = props
    const dispatch = useDispatch()
    const { selectedDrawerItem } = useSelector((state: any) => state.navbar)

    function isSelected(item: NavDrawerItem) {
        return item.id === selectedDrawerItem.id
    }

    function isSelectedStyle(item: NavDrawerItem) {
        return `nav-drawer-item-icon${isSelected(item) ? '--selected' : ''}`
    }

    function renderMobileDrawer() {
        return (
            <BottomNavigation
                showLabels
                value={selectedDrawerItem.id}
                onChange={(_event, newValue) => {
                    dispatch(selectedDrawerItemUpdate(DRAWER_ITEMS[newValue]))
                    navigateTo(router, DRAWER_ITEMS[newValue], true)
                }}
                className='mobile-nav-bar'
            >
                {DRAWER_ITEMS.map((item, index) => {
                    return (
                        <BottomNavigationAction
                            className='nav-drawer-item--mobile'
                            key={index}
                            label={item.name}
                            icon={item.icon(isSelectedStyle(item))}
                        />
                    )
                })}
            </BottomNavigation>
        )
    }

    function renderDesktopDrawer() {
        return (
            <Drawer
                variant='permanent'
                anchor='left'
                className='app-drawer'
                sx={{
                    '& .MuiDrawer-paper': {
                        borderWidth: 0,
                    },
                }}
            >
                <div className='nav-content-sections-holder'>
                    <div className='section'>
                        {DRAWER_ITEMS.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='nav-drawer-item'
                                    onClick={() => {
                                        dispatch(selectedDrawerItemUpdate(item))
                                        navigateTo(router, item, true)
                                    }}
                                >
                                    {item.icon(isSelectedStyle(item))}
                                    {isMobile && <div className='nav-drawer-item-text'>
                                        {item.name}
                                    </div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Drawer>
        )
    }

    return (
        <div>
            {isMobile ? renderMobileDrawer() : renderDesktopDrawer()}
        </div>
    )
}

export default withRouter(NavBarContent)