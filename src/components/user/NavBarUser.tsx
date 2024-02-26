import withRouter, { Router } from '../hoc/withRouter';
import { navigateTo } from '../../helpers/navigationHelper';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './NavBarUser.scss';

interface NavBarUserProps {
    router: Router;
}

/**
 * User icon in the toolbar to navigate to the user page
 */
function NavBarUser(props: NavBarUserProps) {
    const { router } = props;

    function handleUserClick() {
        navigateTo(router, { route: '/user' });
    }

    return (
        <div className="toolbar-user">
            <AccountCircleIcon
                onClick={handleUserClick}
                className="toolbar-user-icon"
                color="primary"
            />
        </div>
    );
}

export default withRouter(NavBarUser);
