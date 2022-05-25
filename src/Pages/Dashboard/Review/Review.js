import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';


const Review = () => {
    const [user] = useAuthState(auth);



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
        fetch('https://obscure-forest-04770.herokuapp.com/reviews', {
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
           <div>
            
            <div className="add-review">
            <h2 className="text-center">Customer Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  style={{border:'1px solid green'}} className='w-full' defaultValue={user.displayName} {...register("name")}  />
                <textarea  style={{border:'1px solid green'}} className='w-full' {...register("description")} placeholder="Description" />
                <input  style={{border:'1px solid green'}} className='w-full' type="number" {...register("rating")} placeholder="rating" />
                <input  style={{border:'1px solid green'}} className='w-full' {...register("img")} placeholder="image url" />
                <input  style={{border:'1px solid green'}} className='w-full' type="submit" />
            </form>
        </div>
        </div>

            
        </div>
    );
};

export default Review;