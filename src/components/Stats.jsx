import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const itemsCount = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentages = Math.round((itemsPacked / itemsCount) * 100);
  // const itemsStats = (100 / items.length) * itemsPacked.length; // itemsStats.toFixed(0)

  return (
    <footer className="stats">
      <em>
        {percentages === 100
          ? "You are all set! Ready to go ✈️"
          : `You have ${itemsCount} items on your list, and you already packed
        ${itemsPacked}(${percentages}% of ${itemsCount} travel items)`}
      </em>
    </footer>
  );
};

export default Stats;
