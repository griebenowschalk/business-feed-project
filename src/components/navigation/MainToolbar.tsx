import { Divider } from '@mui/material'
import { NavDrawerItem } from '../../types/navBar.types'
import { DRAWER_ITEMS } from './NavBarContent'
import withRouter, { Router } from '../hoc/withRouter'
import { navigateTo } from '../../helpers/navigationHelper'

import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavBarUser from '../user/NavBarUser'
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Navigation.scss'

interface Props {
    router: Router
}

function MainToolbar(props: Props) {
    const { router } = props;

    return (
        <div className='main-tool-bar'>
            <AppBar
                position='fixed'
            >   
                <img src='../assets/logo.png' alt='logo' className='toolbar-logo' onClick={() => navigateTo(router, DRAWER_ITEMS[0], true)} />
                <Toolbar>
                    <NotificationsIcon className='toolbar-content-icon' color='primary' />
                    <NavBarUser />
                </Toolbar>
                <Divider />
            </AppBar>
        </div>
    )
}

export default withRouter(MainToolbar)
