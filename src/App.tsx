import { useEffect, useState } from "react";
import "./index.css";

type Item = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [newItem, setNewItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (newItem && newItem.text.trim() === "") return;
    setItems((items) => [...items, newItem as Item]);
    setNewItem(null);
  }

  function handleAddItem(text: string) {
    if (text.trim() === "") return;
    const item: Item = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setNewItem(item);
  }

  function handleDeleteItem(id: string) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCompleteItem(id: string) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center mb-6">
        <label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            id="item"
            value={newItem?.text || ""}
            onChange={(e) => handleAddItem(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <h1 className="text-2xl font-bold my-6">Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <label>
              <input
                className="mr-2"
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleteItem(item.id)}
              />
              {item.text}
            </label>
            <button className="ml-4" onClick={() => handleDeleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
