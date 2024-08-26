import React from 'react'

export const MenuItems = ({ href, children }) => {
    return (
        <li><a href={href}>{children}</a></li>
    )
}
