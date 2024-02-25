import withRouter, { Router } from '../hoc/withRouter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './NavBarUser.scss';

interface Props {
    router: Router;
}

function NavBarUser(props: Props) {
    const { router } = props;

    function handleUserClick() {
        router.navigate('/profile');
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
