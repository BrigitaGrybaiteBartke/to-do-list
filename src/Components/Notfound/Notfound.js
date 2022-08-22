import React from 'react';
import notfound from '../../Images/404.svg'

const Notfound = (prop) => {
    return (
        <>
         <div className='d-flex'>
                <div className='row'>
                    <img
                        src={notfound}
                        alt="pagenotfound"
                        maxWidth='700px'
                    />
                </div>
                <div className='row'>
                    <div>
                        <h3>Sorry, the page not found</h3>
                        <span>The link you followed probably broken or the page has been removed.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notfound;