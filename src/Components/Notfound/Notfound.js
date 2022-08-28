import React from 'react';
import notfound from '../../Images/notfound.svg'

const Notfound = (prop) => {
    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-around mt-4 mb-4'>
                    <div className='row'>
                        <img
                            src={notfound}
                            alt="pagenotfound"
                            style={{width: '600px'}}
                        />
                    </div>
                    <div className='row d-flex align-items-center'>
                        <div>
                            <h3>Sorry, the page not found</h3>
                            <span>The link you followed probably broken or the page has been removed.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notfound;