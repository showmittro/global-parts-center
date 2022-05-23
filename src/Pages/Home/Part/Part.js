import React from 'react';

const Part = ({part}) => {

    const { name,price,img,AvailableQuantity,MinimumQuantity,des} = part;




    return (
        <div>
          <div class="card lg:max-w-lg card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Part;