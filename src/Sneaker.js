import React from "react";

const Sneaker = ({ sneaker }) => {
  return (
    <div>
      <h3>{sneaker.name}</h3>
      <p>Brand: {sneaker.brand}</p>
      <p>Price: ${sneaker.price}</p>
    </div>
  );
};

export default Sneaker;
