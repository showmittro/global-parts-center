import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {

  const {_id,  name, price, img, AvailableQuantity, MinimumQuantity, des } = part;
  const navigate = useNavigate();

  const navigateToPurchaseDetails = id => {
    navigate(`/parts/${id}`);
  }



  return (
    <div>
      <div style={{ height: '500px' }} class="card lg:max-w-lg card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" style={{ height: '200px', width: '80%' }} /></figure>
        <div class="card-body">
          <h2 class="card-title">Part Name: {name}</h2>
          <p>Price: ${price}</p>
          <p>Available Quantity: {AvailableQuantity}</p>
          <p>Minimum Quantity: {MinimumQuantity}</p>
          <p>{des}</p>
          <div class="card-actions justify-center">
            <button
              onClick={() => navigateToPurchaseDetails(_id)}
              class="btn btn-primary"
            >Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;