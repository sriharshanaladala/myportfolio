import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <div>
            <div className="header">
                <p className="logo">SRIHARSHA NALADALA</p>

                <div className="menu-icon toggle-btn">
                    <i className="fas fa-bars"></i>

                </div>
                <Navbar />

            </div>
        </div>
    )
}
