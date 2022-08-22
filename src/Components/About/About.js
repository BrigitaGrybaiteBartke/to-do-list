import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import '../About/About.css'


const About = () => {
    return (
        <>
            <div className='container'>
                <div className=''>
                    <h1 className=''>About</h1>
                </div>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <Link
                            className='nav-link'
                            to="/about/history"
                        >
                            About History
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='nav-link'
                            to="/about/gallery"
                        >
                            Gallery
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </div>

        </>
    );
};

export default About