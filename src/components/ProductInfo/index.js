import React from "react";

const ProductInfo = ({ name, color, material, price }) => {
  return (
    <>
      <h2 className="text-lg font-medium mt-2 font-serif">{name}</h2>
      <span className="flex gap-3">
        <p className="text-sm font-bold uppercase">{color}</p>
        <p className="text-sm font-normal uppercase">{material}</p>
      </span>
      <p className="text-gray-500 mt-2 font-medium">INR {price}</p>
    </>
  );
};

export default ProductInfo;
