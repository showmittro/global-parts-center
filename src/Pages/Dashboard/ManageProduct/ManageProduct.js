import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [stock, setStock] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setStock(data));

    }, []);

    // delete item 


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = stock.filter(pd => pd._id !== id);
                    setStock(remaining);
                })
        }
    }
    return (
        <div className='px-12'>
            <h3 style={{ marginTop: '60px' }} >Manage Products</h3>
            <div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10'">

                    {
                        stock.map(pd => <div
                            key={pd._id}
                            pd={pd}

                        ><div>
                                <div >
                                    <div style={{ height: '250px' }} className='shadow-lg p-3 mb-5 bg-body rounded  mt-5'>
                                        <ul className=' pt-4'>
                                            <li className='fw-bold' >Model: {pd.name}</li>
                                            <p>Price: ${pd.price}</p>
                                            <p>Available Quantity: {pd.AvailableQuantity}</p>
                                            <p>Minimum Quantity: {pd.MinimumQuantity}</p>

                                            <button
                                                onClick={() => handleDelete(pd._id)}
                                                style={{ background: '#DAA520' }}
                                                className='btn btn-md fw-bold mt-3  text-white'>  delete</button>

                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;