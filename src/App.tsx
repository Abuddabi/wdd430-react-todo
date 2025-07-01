import { useState } from "react";
import "./index.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (newItem.trim() === "") return;
    setItems((items) => [...items, newItem]);
    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center mb-6">
        <label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <h1 className="text-2xl font-bold my-6">Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <label>
              <input className="mr-2" type="checkbox" />
              {item}
            </label>
            <button className="ml-4">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
