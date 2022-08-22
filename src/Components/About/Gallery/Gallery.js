import React from 'react';
import '../Gallery/Gallery.css'
import img1 from '../../../Images/Gallery/img1.jpg'
import img2 from '../../../Images/Gallery/img2.jpg'
import img3 from '../../../Images/Gallery/img3.jpg'
import img4 from '../../../Images/Gallery/img4.jpg'
import img5 from '../../../Images/Gallery/img5.jpg'
import img6 from '../../../Images/Gallery/img6.jpg'
import img7 from '../../../Images/Gallery/img7.jpg'
import img8 from '../../../Images/Gallery/img8.jpg'
import img9 from '../../../Images/Gallery/img9.jpg'

const Gallery = () => {
    return (
        <>
            <div className='container'>
                <div className="photoGallery">
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img1} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img2} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img3} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img4} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img5} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img6} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img7} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img8} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img9} alt="" />
                    </div>
                    <div className="photo">
                            <img 
                            className='galleryImage'
                            src={img3} alt="" />
                    </div>
                </div>
                </div>
            </>
            );
};

            export default Gallery;