import React from "react";
import Item from "./Item";

const ParkingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.length === 0 && <h2>No travel item packed yet!</h2>}
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default ParkingList;
