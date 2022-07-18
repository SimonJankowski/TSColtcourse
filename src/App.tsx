import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Product from "./models/product";
import ShoppingListForm from "./components/ShoppingListForm"

console.log("hello");


function App() {
const [items, setItems] = useState<Product[]>([])
const addItem = (product: string, qty: number) => {
  console.log("made it to the app component");
  console.log(product)
  setItems([...items, {id:Date.now(), product, qty}])
}
  return (
    <div className="App">
      <h1>yoyoy</h1>
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
