import React from 'react';

const ContactUs = () => {
    return (
        <>
        <h1 className='font-bold text-3xl text-center'>Contact Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-12 py-10'>
            <div className='py-2'>
            <input type="text" placeholder="Type here" class="input input-bordered input-success w-full  mt-2" />
            <input type="text" placeholder="Type here" class="input input-bordered input-success w-full  mt-2" />
            <input type="text" placeholder="Type here" style={{height:'200px'}} class="mt-2 input input-bordered input-success w-full " />
            <input type="text" placeholder="Type here" class=" mt-2 input input-bordered input-success w-full " />
            <br />
            <div class="form-control mt-2">
            <button class="btn w-50  bg-primary border-0 mt-2 font-bold text-1xl text-black">Submit</button>
        </div>
            
            </div>
            <div>
                <div className='card shadow-2xl' style={{height:'450px'}}>
                <p><iframe style={{height:'450px'}} className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29378.474195382754!2d91.38132083558204!3d23.012413937304867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753429e88a352f7%3A0xdf9547cb76f03b88!2sFeni!5e0!3m2!1sen!2sbd!4v1653046233993!5m2!1sen!2sbd"  allowfullscreen="" ></iframe></p>
                </div>

            </div>
        </div>
        </>
    );
};

export default ContactUs;