import { createTheme } from '@mui/material/styles';
import styles from './style.module.scss';

export const NAV_DRAWER_WIDTH = styles.nav_bar_width;
export const TOOLBAR_HEIGHT = styles.tool_bar_height;

export const colors = {
    primary: styles.primary,
    secondary: styles.secondary,
    error: styles.error,
    container_background_color: styles.container_background_color,
    text_dark: styles.text_dark,
};

/**
 * Refer to
 * https://material-ui.com/customization/palette/
 * for valid options
 */
export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: styles.primary,
            contrastText: '#ffffff',
        },
        secondary: {
            main: styles.secondary,
            contrastText: '#ffffff',
        },
        error: {
            main: styles.error,
            contrastText: '#ffffff',
        },
        background: {
            default: styles.container_background_color,
        },
        text: {
            primary: styles.text_dark,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Roboto, sans-serif',
            },
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});
