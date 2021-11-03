import React from 'react'

const Header = ({branding}) => {
    return (
        <nav className='nav navbar-expand-sm navbar-dark bg-danger mb-0 py-0'>
            <div className='container'>
                <a href='/' className='navbar-brand'>{branding}</a>
                <ul className='navbar-nav float-end'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
