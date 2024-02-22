import { Router } from '../components/hoc/withRouter'
import { DRAWER_ITEMS } from '../components/navigation/NavBarContent'
import { NavDrawerItem } from '../types/navBar.types'

export function navigateTo(router: Router, item: NavDrawerItem, replace: boolean = false) {
    router.navigate(item.route, { replace })
}

export function navigateBack(router: Router) {
    if (window.history.state.idx > 0) {
        router.navigate(-1)
    } else {
        router.navigate('/')
    }
}

export function findURLRelatingDrawerItem(url: string): NavDrawerItem {
    if (url === '/') return DRAWER_ITEMS[0]
    let selectedItem = DRAWER_ITEMS[0]
    DRAWER_ITEMS.some((item, index) => {
        if (index === 0) return false
        if (url.includes(item.route)) {
            selectedItem = item
            return true
        }
        return false
    })
    return selectedItem
}