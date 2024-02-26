import { Router } from '../components/hoc/withRouter';
import { DRAWER_ITEMS } from '../staticcontent/DrawerItems';
import { NavDrawerItem } from '../types/navBar.types';

/**
 * Navigates to the given route
 * @param router The router to use for navigation
 * @param item The item to navigate to
 * @param replace Whether to replace the current route in the history
 */
export function navigateTo(
    router: Router,
    item: NavDrawerItem | { route: string },
    replace: boolean = false,
) {
    router.navigate(item.route, { replace });
}

/**
 * Navigates back to the previous route or home if there is no previous route
 * @param router The router to use for navigation
 */
export function navigateBack(router: Router) {
    if (window.history?.state?.idx > 0) {
        router.navigate(-1);
    } else {
        router.navigate('/');
    }
}

/**
 * Finds the drawer item that relates to the given URL
 * @param url The URL to find the drawer item for
 * @returns The drawer item that relates to the URL
 */
export function findURLRelatingDrawerItem(url: string): NavDrawerItem {
    if (url === '/') return DRAWER_ITEMS[0];
    let selectedItem = DRAWER_ITEMS[0];
    DRAWER_ITEMS.some((item, index) => {
        if (index === 0) return false;
        if (url.includes(item.route)) {
            selectedItem = item;
            return true;
        }
        return false;
    });
    return selectedItem;
}
