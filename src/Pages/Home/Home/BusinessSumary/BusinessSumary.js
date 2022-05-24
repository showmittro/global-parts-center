import React from 'react';
import countriesIcons from '../../../../images/Flag.png'
import revenueIcons from '../../../../images/Revenue.jpg'
import feedbackIcons from '../../../../images/feedback.png'

const BusinessSumary = () => {
    return (
        <div className='py-10 px-12'>
            <h1 class="text-4xl font-bold text-center">Millions Business Trust Us</h1>
            <p className='text-xl py-1 text-teal-400 text-center'>Try To Understand Users Expectation</p>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10'>
                <div class="card w-50 bg-base-100 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img style={{ height: '100px', width: '100px' }} src={countriesIcons} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-5xl text-secondary font-bold'>65</p>
                        <div class="stat-desc"><p className='text-2xl pt-1'>Countries</p></div>
                    </div>
                </div>
                <div class="card w-50 bg-base-100 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img style={{ height: '100px', width: '100px' }} src={revenueIcons} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-5xl text-secondary font-bold'>420M+</p>
                        <div class="stat-desc"><p className='text-2xl pt-1'>Revenue</p></div>
                    </div>
                </div>
                <div class="card w-50 bg-base-100 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img style={{ height: '100px', width: '100px' }} src={feedbackIcons} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-5xl text-secondary font-bold'>770+</p>
                        <div class="stat-desc"><p className='text-2xl pt-1'>Feedback</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSumary;