import type { Item } from "./App";

export default function TodoItem({
  item,
  onDeleteItem: remove,
  onCompleteItem: toggleComplete,
}: {
  item: Item;
  onDeleteItem: (id: string) => void;
  onCompleteItem: (id: string) => void;
}) {
  return (
    <li className="flex items-center justify-between mb-2">
      <label>
        <input
          className="mr-2"
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />
        {item.text}
      </label>
      <button className="ml-4" onClick={() => remove(item.id)}>
        Delete
      </button>
    </li>
  );
}
