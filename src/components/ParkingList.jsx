import React from "react";
import Item from "./Item";

const ParkingList = ({ initialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li>{<Item item={item} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingList;
