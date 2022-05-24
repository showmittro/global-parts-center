import React from 'react';
import countriesIcons from '../../../../images/Flag.png'
import revenueIcons from '../../../../images/Revenuejpg.jpg'
import feedbackIcons from '../../../../images/feedback.png'

const BusinessSumary = () => {
    return (
        <div className='py-10 px-12'>
            <h1 class="text-4xl font-bold text-center">This is Business Summary</h1>
            <div class="stats shadow-lg grid grid-cols-2 md:gird-cols-2 lg:grid-cols-3 gap-5 py-10 ">

                <div class="stat place-items-center">
                    <div class="stat-title"><img className='py-5' style={{height:'130px',width:'130px'}} src={countriesIcons} alt="" /></div>
                    <div class="stat-value"> <p className='text-5xl text-secondary'>65</p></div>
                    <div class="stat-desc"><p className='text-2xl pt-1'>Countries</p></div>
                </div>

                <div class="stat place-items-center">
                <div class="stat-title"><img className='py-5' style={{height:'130px',width:'130px',}} src={revenueIcons} alt="" /></div>
                <div class="stat-value"> <p className='text-5xl text-secondary'>420M+</p></div>
                    <div class="stat-desc"><p className='text-2xl pt-1'>Revenue</p></div>
                </div>

                <div class="stat place-items-center">
                <div class="stat-title"><img className='py-5' style={{height:'100px',width:'100px'}} src={feedbackIcons} alt="" /></div>
                <div class="stat-value"> <p className='text-5xl text-secondary'>770+</p></div>
                    <div class="stat-desc"><p className='text-2xl pt-1'>Feedback</p></div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSumary;