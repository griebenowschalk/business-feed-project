import { strings } from "../localisation/strings"
import { TabItem } from "../types/navTab.types";

export const TAB_ITEMS: TabItem[] = [
    {
        id: 0,
        name: strings.business,
        value: strings.business_filter
    },
    {
        id: 1,
        name: strings.social,
        value: strings.social_filter
    },
    {
        id: 2,
        name: strings.hr,
        value: strings.hr_filter
    },
    {
        id: 3,
        name: strings.safety,
        value: strings.safety_filter
    },
]