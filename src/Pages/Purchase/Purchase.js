import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
  const { serviceId } = useParams();
  const [parts, setParts] = useState([])


  useEffect(() => {
    const url = `http://localhost:5000/parts/${serviceId}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setParts(data));

  }, [])

  return (
    <div className='py-5'>
      <h1 className='text-3xl text-center text-black font-bold'>Purchase page</h1>


      <div class="card flex items-center justify-items-center bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={parts.img} style={{ height: '250px', width: '250px' }} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center text-black">
          <h2 class="card-title">Parts Name: {parts.name}
          </h2>
          <h2 class="card-title">Price: {parts.price}
          </h2>
          <h2 class="card-title">AvailableQuantity: {parts.AvailableQuantity}
          </h2>
          <h2 class="card-title">MinimumQuantity: {parts.MinimumQuantity
          }
          </h2>
          <div>
            <p>{parts.des}</p>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>







    </div>
  );
};

export default Purchase;