import React from "react";
import Sneaker from "./Sneaker";

const SneakerList = ({ sneakers }) => {
  return (
    <div>
      {sneakers.map((sneaker) => (
        <Sneaker key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};

export default SneakerList;
