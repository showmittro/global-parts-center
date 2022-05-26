import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://powerful-inlet-95436.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Add Product Successfully');
                    reset();
                }
            })


    }
    return (
        <div>
            <div className='px-12 py-10'>
                <h2 className=" font-bold" style={{ color: 'green' }}>Add A Products</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' type="name" {...register("name")} placeholder="name" />
                    <br />
                    <textarea style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' {...register("des")} placeholder="Description" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' type="number" {...register("AvailableQuantity")} placeholder="AvailableQuantity" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' type="number" {...register("MinimumQuantity")} placeholder="MinimumQuantity" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' type="number" {...register("price")} placeholder="price" />
                    <br />
                    <input style={{ border: '1px solid green' }} className='w-96 mt-3 rounded' {...register("img")} placeholder="image url" /> <br />

                    <input style={{ border: '1px solid green', background: 'green', color: '#ffff' }} className='w-96 mt-3 rounded font-bold' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;