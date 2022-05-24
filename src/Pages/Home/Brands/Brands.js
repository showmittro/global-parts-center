import React from 'react';

const Brands = () => {
    return (
        <div className='py-10 text-center'>
            <p className='text-4xl font-bold text-sky-400'>Our Brands</p>
            <p className='text-5xl'>comming soons..........</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>
                {/* brand-1  */}
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src="" alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Brands;