import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    };

    // OnAddItems prop from the App parent component is responsible for actually updating the items state.
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form">
      <h3>What do you need for your trip? 😀</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Item name..."
      />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
};

export default Form;
