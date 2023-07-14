import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="add-form">
      <h3>What do you need for your trip? 😀</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item name..." />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
};

export default Form;
