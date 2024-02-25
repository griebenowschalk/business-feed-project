<<<<<<< Updated upstream
import { TOOLBAR_HEIGHT, NAV_DRAWER_WIDTH } from '../theme/theme'
import { Global, css } from '@emotion/react'
=======
import { TOOLBAR_HEIGHT, NAV_DRAWER_WIDTH } from "../theme/theme"
>>>>>>> Stashed changes

export const responsiveNavigationStyle = (theme: any) => ({
    toolbarAwareContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        minWidth: "100%",
        width: "100%",
        marginTop: TOOLBAR_HEIGHT
    },
    drawer: {
        [theme?.breakpoints?.up("sm")]: {
            width: NAV_DRAWER_WIDTH,
            flexShrink: 0,
        },
    },
    content: {
        display: "flex",
        width: "100%",
        minWidth: "100%",
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${NAV_DRAWER_WIDTH})`,
            minWidth: `calc(100% - ${NAV_DRAWER_WIDTH})`,
        },
    }
})

export const GlobalStyles = () => (
    <Global
        styles={css`
            #root {
                height: 100vh;
            }
            body, html {
                margin: 0;
                font-family: Roboto, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
            }
        `}
    />
);