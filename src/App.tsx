import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Product from "./models/product";
import ShoppingListForm from "./components/ShoppingListForm";



function App() {
  const [items, setItems] = useState<Product[]>([]);
  const addItem = (product: string, qty: number) => {
    setItems([...items, { id: Date.now(), product, qty }]);
  };
  return (
    <div className="App">
      <h1>yoyoy</h1>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
