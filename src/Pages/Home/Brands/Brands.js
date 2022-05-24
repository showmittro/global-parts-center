import React from 'react';
import asus from '../../../images/asus.png'
import dell from '../../../images/dell.png'
import delux from '../../../images/delux.png'
import econymy from '../../../images/econymy.webp'
import hp from '../../../images/hp.png'
import intel from '../../../images/intel.png'
import pentium from '../../../images/pentium.jpg'
import apple from '../../../images/apple.jpg'
import lenovo from '../../../images/lenovo-.png'

const Brands = () => {
    return (
        <div className='py-12 text-center px-10'>
            <p className='text-3xl font-bold text-sky-400'>Our Best Selling Products</p>
            <p className='text-1xl'>Best Brands Parts for Laptop & Desktop</p>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10'>
                {/* brand-1  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={asus} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Asus</h2>
                        <p>ASUS is a leading company driven by innovation and commitment to quality.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-2  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={dell} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Dell</h2>
                        <p>Shop the latest Dell computers solutions. Laptops, desktops, gaming pc.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-3  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={delux} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Delux</h2>
                        <p>The designers of DELUX adhere to the principles of industrial design in line with human aesthetics.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-4  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={econymy} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Econymy</h2>
                        <p>An economy encompasses all activity related to production of goods and services in an area.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-5  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={hp} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: HP</h2>
                        <p>Learn about HP laptops, pc desktops, printers, accessories at the Official HP® Website</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-6  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={intel} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Intel</h2>
                        <p>Intel's innovation in cloud computing, data center, Internet of Things, and PC solutions.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-7 */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={pentium} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Pentium</h2>
                        <p>Pentium is a brand used for a series of x86 architecture-compatible microprocessors.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-8  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={apple} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Apple</h2>
                        <p>Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore.</p>
                        <div class="card-actions justify-end">
                            {/* <button class="btn btn-primary">Watch</button> */}
                        </div>
                    </div>
                </div>
                {/* brand-9  */}
                <div class="card card-side bg-base-100 shadow-2xl">
                    <figure><img style={{ height: '100px', width: '100px' }} src={lenovo} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold">Brand Name: Lenovo</h2>
                        <p>Lenovo Group Limited, often shortened to Lenovo is a Chinese multinational technology company manufacturing.</p>
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