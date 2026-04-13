import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className='w-full h-16 bg-gray-900 shadow-md sticky top-0 z-50 flex items-center justify-between px-6 border-b border-gray-800'>
            <div className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                <Link to='/'>Movie App</Link>
            </div>
            <div className='flex gap-6 text-sm font-medium'>
                <Link to='/' className='text-gray-300 hover:text-white transition-colors'>Home</Link>
                <Link to='/fav' className='text-gray-300 hover:text-white transition-colors'>Favorites</Link>
            </div>
        </nav>
    );
}

export default Nav