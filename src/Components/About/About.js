import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import '../About/About.css'
import call from '../../Images/Icons/call.svg'
import mail from '../../Images/Icons/mail.svg'
import map from '../../Images/Icons/map.svg'


const About = () => {
    return (
        <>
            <div className='container'>
                <div className='m-5 text-center'>
                    <h4>About Us</h4>
                </div>
                <div className='d-flex justify-content-evenly m-5'>
                    <div>
                        <div className='pb-2 text-center'>
                            <img
                                className='text-center'
                                src={call}
                                alt='appLogo'
                                width="30px"
                            />
                        </div>
                        <div>
                            <span>+370 (333) 33 333</span>
                        </div>
                    </div>
                    <div>
                        <div className='pb-2 text-center'>
                            <img
                                src={mail}
                                alt='appLogo'
                                width="30px"
                            />
                        </div>
                        <div>
                            <span>
                                <a href="mailto:email@example.com">email@example.com</a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='pb-2 text-center'>
                            <img
                                src={map}
                                alt='appLogo'
                                width="30px"
                            />
                        </div>
                        <span>
                            Street 33, LT-33333, Lithuania
                        </span>
                        <div>

                        </div>
                    </div>

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