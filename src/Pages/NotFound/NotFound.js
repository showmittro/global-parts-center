import React from 'react';
import NotFoundBg from '../../../src/images/NotFound.jpg'

const NotFound = () => {
    return (
        <div className='m-auto'>
            <h1 className='text-red text-3xl font-bold text-center'>Sorry!!! Page NotFound </h1>
            <img src={NotFoundBg} alt="" />
            
        </div>
    );
};

export default NotFound;