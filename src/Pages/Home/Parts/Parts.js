import React from 'react';
import Part from '../Part/Part';

const Parts = () => {


    const parts = [
        { id: 1, name: 'Laptop Ram', price: 200, img: 'https://5.imimg.com/data5/XA/SU/NY/SELLER-86607245/16gb-ddr4-computer-ram-500x500.jpg', AvailableQuantity: 300, MinimumQuantity: 100, des: 'Random-access memory is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code.' },

        { id: 2, name: 'Laptop Hard-Disk', price: 300, img: 'https://c1.wallpaperflare.com/preview/417/524/908/cache-computers-data-digital.jpg', AvailableQuantity: 400, MinimumQuantity: 200, des: 'Hard disks are flat circular plates made of aluminum or glass and coated with a magnetic material.' },

        { id: 3, name: 'Deksotp Coling Fan', price: 150, img: 'https://static-01.daraz.com.bd/p/a3039d172e1944c4248410d2ab09d0b5.jpg', AvailableQuantity: 250, MinimumQuantity: 50, des: 'Random-access memory is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code.' }

    ]
    return (
        <div>
            <h2 className='text-3xl font-bold'>Our Parts</h2>
            <p className='text-3xl'>all parts comming soons!!!!!!!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                {
                    parts.map(part => <Part
                        key={part.id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;