import styled from '@mui/system/styled'
import { colors, NAV_DRAWER_WIDTH, NAV_DRAWER_HEIGHT } from '../theme/theme'

export const responsiveNavigationStyle = (theme: any) => ({
        root: {
            display: 'flex',
            minWidth: '100%',
            minHeigh: '100%',
            width: '100%',
            backgroundColor: colors.container_background_color,
        },
        toolbar: theme?.mixins?.toolbar,
        drawerPaper: {
            width: NAV_DRAWER_WIDTH,
        },
        content: {
            backgroundColor: colors.container_background_color,
            width: '100%',
            minWidth: '100%',
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${NAV_DRAWER_WIDTH})`,
                minWidth: `calc(100% - ${NAV_DRAWER_WIDTH})`,
            },
        }
})