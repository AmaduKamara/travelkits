import Form from "./components/Form";
import Header from "./components/Header";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <ParkingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
