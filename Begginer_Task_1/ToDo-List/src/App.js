import React, { useState } from "react";
import "./App.css";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, { text, id: Math.random() }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddItem onAddItem={addItem} />
      <ItemList items={items} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;
