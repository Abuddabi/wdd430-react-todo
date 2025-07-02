import { useEffect, useState } from "react";
import "./index.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export type Item = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleSubmit(event: React.FormEvent, newItem: Item | null) {
    event.preventDefault();
    if (!newItem || (newItem && newItem.text.trim() === "")) return;
    setItems((items) => [...items, newItem as Item]);
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
      <NewTodoForm onSubmit={handleSubmit} />
      <TodoList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCompleteItem={handleCompleteItem}
      />
    </>
  );
}

export default App;
