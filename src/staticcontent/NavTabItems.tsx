import { strings } from '../localisation/strings'
import { TabItem } from "../types/navTab.types";

export const TAB_ITEMS: TabItem[] = [
    {
        id: 0,
        name: strings.business,
        onClick: () => { }
    },
    {
        id: 1,
        name: strings.social,
        onClick: () => { }
    },
    {
        id: 2,
        name: strings.hr,
        onClick: () => { }
    },
    {
        id: 3,
        name: strings.safety,
        onClick: () => { }
    },
]