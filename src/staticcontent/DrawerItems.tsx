import { NavDrawerItem } from '../types/navBar.types';
import { strings } from '../localisation/strings';
import {
    AddHomeOutlined,
    GridViewOutlined,
    ChatBubbleOutlineOutlined,
    AdminPanelSettingsOutlined,
} from '@mui/icons-material';

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
        icon: (className: string) => (
            <ChatBubbleOutlineOutlined className={className} />
        ),
        route: '/chat',
    },
    {
        id: 3,
        name: strings.admin,
        icon: (className: string) => (
            <AdminPanelSettingsOutlined className={className} />
        ),
        route: '/admin',
    },
];
