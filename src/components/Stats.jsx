import React from "react";

const Stats = ({ items }) => {
  const itemsStats =
    (100 / items.length) * items.filter((item) => item.packed === true).length;
  console.log(itemsStats);
  return (
    <footer className="stats">
      <p>
        You have {items.length} items on your list, and you already packed{" "}
        {items.filter((item) => item.packed === true).length}(
        {itemsStats.toFixed(0)}% of {items.length} travel items)
      </p>
    </footer>
  );
};

export default Stats;
