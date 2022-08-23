import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.svg'
import '../Header/Header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/home"
                    >
                        <img
                            src={logo}
                            alt='appLogo'
                            width="50px"
                        />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/todolist"
                                >
                                    To do List
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;