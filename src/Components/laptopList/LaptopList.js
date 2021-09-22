import React from "react";
import data from "../../data";
const LaptopList = () => {
  return (
    <ul>
      {data.laptops.map((laptop) => (
        <li>
          <h2>{laptop.name}</h2>
          <img src={laptop.image} alt={laptop.name} />
          <p>{laptop.description}</p>
          <p>
            Sale:{" "}
            <span>
              {laptop.isSale ? "Цена со скидкой" : "Цена указана без скидки"}
            </span>
          </p>
          <span>{laptop.price} UAH</span>
        </li>
      ))}
    </ul>
  );
};

export default LaptopList;
