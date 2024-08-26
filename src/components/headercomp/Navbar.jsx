import React from 'react'
import { MenuItems } from './MenuItems'

export const Navbar = () => {
    const menuitems = ["Home", "About", "Projects", "Contacts"]
    return (
        <nav>
            {
                menuitems.map((item, index) => {
                    return <MenuItems key={index} href={`#` + item} children={item} />
                })
            }
        </nav>
    )
}
