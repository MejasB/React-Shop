import React from "react";
import data from "../../../data";

const HeaderList = () => {
  return (
    <ul>
      {data.header.map((headeerItem) => (
        <li key={headeerItem}>{headeerItem}</li>
      ))}
    </ul>
  );
};
export default HeaderList;
