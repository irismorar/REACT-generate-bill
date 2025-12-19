import { useState } from "react";

export function EditProduct({ initialProduct, onChangeProduct }) {
  const [newQuantity, setNewQuantity] = useState(initialProduct.quantity);
  const [newName, setNewName] = useState(initialProduct.name);
  const [newPrice, setNewPrice] = useState(initialProduct.price);

  return (
    <li
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          onChangeProduct({
            ...initialProduct,
            quantity: newQuantity,
            name: newName,
            price: newPrice,
          });
        }
      }}
    >
      <input
        type="number"
        className="editing-input"
        min="1"
        max="10"
        value={newQuantity}
        onChange={(event) => {
          setNewQuantity(event.target.value);
        }}
      ></input>
      <input
        type="text"
        className="editing-input"
        placeholder="Edit product name..."
        value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      ></input>
      <input
        type="number"
        className="editing-input"
        min="1"
        max="2000"
        value={newPrice}
        onChange={(event) => {
          setNewPrice(event.target.value);
        }}
      ></input>
    </li>
  );
}
