export interface NavDrawerItem {
    id: number
    name: string
    icon: (selected: boolean) => JSX.Element
    route: string
}
