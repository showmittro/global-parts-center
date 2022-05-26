import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {


    const [parts, setParts] = useState([])


    useEffect(() => {
        fetch('https://powerful-inlet-95436.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data));

    }, []);
    return (
        <div>
            <h2 className='text-4xl font-bold mt-3 text-center text-black '>Our Parts</h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>


                    {
                        parts.map(part => <Part
                            key={part.id}
                            part={part}
                        ></Part>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Parts;