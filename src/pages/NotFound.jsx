import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <div>
            <div className='grid grid-cols-1 justify-center' >

                <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
                <p className='my-3 text-center'>Sorry, the page you are looking for does not exist.</p>

                <button className='bg-red-600 mx-auto text-white px-3 py-2 '>
                    <Link to="/">
                        Go Back Home
                    </Link>
                </button>


            </div>
        </div>
    )
}

export default NotFound