import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className='w-full h-12 bg-black absolute flex items-center left-0 top-0'>
            <div className='relative left-2'>
                <Link to='/'>Movie App</Link>
            </div>
            <div className='absolute right-3'>
                <Link to='/' className='mr-4'>Home</Link>
                <Link to='/fav'>Favorite</Link>
            </div>
        </nav>
    )
}

export default Nav