import React from 'react';
import sofa from '../../Images/Icons/sofa.svg'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='d-flex flex-column align-items-center justify-content-center mt-4 mb-4'>
                    <div className='mb-5'>
                        <h3>Welcome to my Page!</h3>
                    </div>
                    <div className='row'>
                        <img
                            src={sofa}
                            alt='homePageImage'
                            style={{ width: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;