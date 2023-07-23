import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='app-nav-bar'>
            <Link to={'/add-song'}>
                <span className='app-link'>
                    Add Song
                </span>
            </Link>
            <Link to={'/songs-list'}>
                <span className='app-link'>
                    Song List
                </span>
            </Link>
            <Link to={'/books-list'}>
                <span className='app-link'>
                    Books List
                </span>
            </Link>
        </div>
    )
}
