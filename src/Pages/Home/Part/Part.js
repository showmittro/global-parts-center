import React from 'react';

const Part = ({part}) => {

    const { name,price,img,AvailableQuantity,MinimumQuantity,des} = part;




    return (
        <div>
          <div style={{height:'500px'}} class="card lg:max-w-lg card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" style={{height:'200px',width:'80%'}} /></figure>
  <div class="card-body">
    <h2 class="card-title">Part Name: {name}</h2>
    <p>Price: ${price}</p>
    <p>Available Quantity: {AvailableQuantity}</p>
    <p>Minimum Quantity: {MinimumQuantity}</p>
    <p>{des}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Part;