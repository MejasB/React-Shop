import React from "react";
import data from "../../data";

const PhoneList = () => {
  return (
    <ul>
      {data.phones.map((phone) => (
        <li>
          <h2>{phone.name}</h2>
          <img src={phone.image} alt={phone.name} />
          <p>{phone.description}</p>
          <p>
            {phone.colors.map((color) => (
              <button type="button">{color}</button>
            ))}
          </p>
          <span>
            Sale: {phone.isSale ? "Цена со скидкой" : "Цена без скидки"}
          </span>
          <p>{phone.price} UAH</p>
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
