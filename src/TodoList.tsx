import type { Item } from "./App";
import TodoItem from "./TodoItem";

export default function TodoList({
  items,
  onDeleteItem,
  onCompleteItem,
}: {
  items: Item[];
  onDeleteItem: (id: string) => void;
  onCompleteItem: (id: string) => void;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold my-6">Todo List</h1>
      <ul>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCompleteItem={onCompleteItem}
          />
        ))}
      </ul>
    </>
  );
}
