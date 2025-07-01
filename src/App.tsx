import { useState } from "react";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <form>
        <label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            id="item"
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <h1 className="text-2xl font-bold my-6">Todo List</h1>
      <ul>
        <li className="flex items-center justify-between mb-2">
          <label>
            <input className="mr-2" type="checkbox" />
            Item 1
          </label>
          <button className="ml-4">Delete</button>
        </li>
        <li className="flex items-center justify-between mb-2">
          <label>
            <input className="mr-2" type="checkbox" />
            Item 2
          </label>
          <button className="ml-4">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
