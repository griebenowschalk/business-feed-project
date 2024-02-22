export interface NavDrawerItem {
    id: number
    name: string
    icon: (className: string) => JSX.Element
    route: string
}
