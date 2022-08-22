import React from 'react';
import '../History/History.css'
import img from '../../../Images/Gallery/img7.jpg'


const History = () => {
    return (
        <>
            <div className='container'>
                <div className='clearfix'>
                    <div>
                        <img
                            id='historyImg'
                            src={img} />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ullam beatae aspernatur nobis, facilis illo ea aut minus quo optio corporis veritatis? Dolores deleniti alias ex dolorum officia non, doloribus exercitationem praesentium, magni cumque voluptas! Voluptates perferendis maiores dolorem totam! Aliquid officiis ipsam error rerum deleniti vero, eligendi fugit, architecto similique at quo tenetur ab eveniet eius repudiandae dolorum voluptatum voluptatem officia provident iste eum quos. Quisquam facilis consequatur odit, cupiditate ex aliquid repellat quaerat!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;