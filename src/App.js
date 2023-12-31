import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Towel", quantity: 12, packed: true },
    { id: 4, description: "Graduation Shoe", quantity: 12, packed: false },
  ]);

  // Adding an item to the list
  const hancleAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  // Deleting an item from the list
  const handleDleteItem = (id) => {
    // const newItems = items.filter((item) => item.id !== id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // Toggling items
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Clearing the items list
  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItems={hancleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
