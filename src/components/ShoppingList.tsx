import React from "react";
import Product from "../models/product";


interface SLProps{
    items: Array<Product>
}

const ShoppingList = (props: SLProps): JSX.Element => {
  ;
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
