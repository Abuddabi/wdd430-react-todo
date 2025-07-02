import { useState } from "react";
import type { Item } from "./App";

export default function NewTodoForm({
  onSubmit: submit,
}: {
  onSubmit: (event: React.FormEvent, newItem: Item | null) => void;
}) {
  const [newItem, setNewItem] = useState<Item | null>(null);

  function handleAddItem(text: string) {
    if (text.trim() === "") return;
    const item: Item = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setNewItem(item);
  }

  return (
    <form
      onSubmit={(e) => {
        submit(e, newItem);
        setNewItem(null);
      }}
      className="flex items-center mb-6"
    >
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
  );
}
