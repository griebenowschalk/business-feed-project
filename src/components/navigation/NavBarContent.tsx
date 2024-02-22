import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { strings } from '../../localisation/strings'
import { NavDrawerItem } from '../../types/navBar.types'
import { AddHomeOutlined, GridViewOutlined, ChatBubbleOutlineOutlined, AdminPanelSettingsOutlined } from '@mui/icons-material';
import { selectedDrawerItemUpdate } from '../../redux/reducers/navbarReducer';
import withRouter, { Router } from '../hoc/withRouter';
import { findURLRelatingDrawerItem, navigateTo } from '../../helpers/navigationHelper';
import { BottomNavigation, BottomNavigationAction, Drawer } from '@mui/material';
import { NAV_DRAWER_WIDTH } from '../../theme/theme';

import './Navigation.scss'

export const DRAWER_ITEMS: NavDrawerItem[] = [
    {
        id: 0,
        name: strings.home,
        icon: (className: string) => <AddHomeOutlined className={className} />,
        route: '/',
    },
    {
        id: 1,
        name: strings.explorer,
        icon: (className: string) => <GridViewOutlined className={className} />,
        route: '/explorer',
    },
    {
        id: 2,
        name: strings.chat,
        icon: (className: string) => <ChatBubbleOutlineOutlined className={className} />,
        route: '/chat',
    },
    {
        id: 3,
        name: strings.admin,
        icon: (className: string) => <AdminPanelSettingsOutlined className={className} />,
        route: '/admin',
    },
]

interface Props {
    router: Router,
    isMobile: boolean
}

function NavBarContent(props: Props) {
    const { router, isMobile } = props
    const dispatch = useDispatch()
    const selectedDrawerItem = useSelector((state: any) => state.navbar.selectedDrawerItem)

    function isSelected(item: NavDrawerItem) {
        return item.id === selectedDrawerItem.id
    }

    function isSelectedStyle(item: NavDrawerItem) {
        return `nav-drawer-item-icon${isSelected(item) ? '--selected' : ''}`
    }

    function renderMobileDrawer() {
        return (
            <div className='mobile-nav-bar'>
                <BottomNavigation
                    showLabels
                    value={selectedDrawerItem.id}
                    onChange={(_event, newValue) => {
                        dispatch(selectedDrawerItemUpdate(DRAWER_ITEMS[newValue]))
                        navigateTo(router, DRAWER_ITEMS[newValue], true)
                    }}
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
            </div>
        )
    }

    function renderDesktopDrawer() {
        return (
            <Drawer
                variant='permanent'
                anchor='left'
                className='app-drawer'
                sx={{
                    width: NAV_DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                       borderWidth: 0
                    },
                }}
            >
                <div className='nav-content-sections-holder'>
                    <div className='section'>
                        {DRAWER_ITEMS.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={'nav-drawer-item'}
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