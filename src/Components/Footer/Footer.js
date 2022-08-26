import React from 'react';
import linkedin from '../../Images/Icons/linkedin.svg'
import git from '../../Images/Icons/git.svg'
import '../Footer/Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="bg-light text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-2">
                        <a
                            className="btn btn-light btn-floating m-1"
                            href="https://www.linkedin.com/in/brigita-grybait%C4%97-bartk%C4%97-487403112"
                            role="button">
                            <img
                                src={linkedin}
                                alt=""
                                width="25px"
                            />
                        </a>

                        <a
                            className="btn btn-light btn-floating m-1"
                            href="https://github.com/BrigitaGrybaiteBartke"
                            role="button">
                            <img
                                src={git}
                                alt=""
                                width="25px"
                            />
                        </a>

                    </section>
                </div>

                <div
                    className="text-center p-3"
                    style={{ fontSize: "13px", backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    &copy; {new Date().getFullYear()} BrigitaGit
                    <span className='ps-3'>
                        <a href="mailto:brigita.grybaite@gmail.com">brigita.grybaite@gmail.com</a>
                    </span>
                  
                    <span className='ps-3'>
                        Street 33, LT-33333, Lithuania
                    </span>

                 
                </div>
            </footer>
        </>
    )
}

export default Footer;