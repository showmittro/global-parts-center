import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';


const Review = () => {
    const [user] = useAuthState(auth);



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review  Successfully');
                    reset();
                }
            })


    }
    return (
        <div>


            <div className='px-12 py-10'>
                <h2 className=" font-bold" style={{ color: 'green' }}>Customer Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' defaultValue={user.displayName} placeholder='name' {...register("name")} />
                    <br />
                    <textarea style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' {...register("description")} placeholder="Description" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' type="number" {...register("rating")} placeholder="rating" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' {...register("img")} placeholder="image url" /> <br />

                    <input style={{ border: '1px solid green', background: 'green', color: '#ffff' }} className='w-96 mt-3 rounded font-bold' type="submit" />
                </form>
            </div>
        </div>

    );
};

export default Review;