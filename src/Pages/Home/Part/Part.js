import React from "react";

const Part = (props) => {
  const { name, image, description, available, order, price } = props.part;
  return (
    <div className="shadow-lg overflow-hidden rounded-lg">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-orange-500">{name}</h2>
        <p className="text-sm font-semibold text-stone-600">{description}</p>
        <p className="text-lg text-orange-500">Available : {available}</p>
        <p className="text-lg text-orange-500">Minimum Order : {order}</p>
        <p className="text-lg text-orange-500">Price : ${price}</p>
        <div className="flex justify-center my-2">
          <button className="w-full bg-[#ffc801] py-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
