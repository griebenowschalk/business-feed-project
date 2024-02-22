import React from 'react'
import withRouter, { Router } from '../hoc/withRouter'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './NavBarUser.scss'

interface Props {
    router: Router
}

function NavBarUser(props: Props) {
    return (
        <div className='toolbar-user'>
            <AccountCircleIcon className='toolbar-user-icon' color='primary' />
        </div>
    )
}

export default withRouter(NavBarUser)
