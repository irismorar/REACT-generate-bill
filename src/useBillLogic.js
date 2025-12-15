import { useState } from "react";

export function useBillLogic() {
  const [productQuantity, setProductQuantity] = useState(1); // 1-10
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(1); // 1-2000;
  const [products, setProducts] = useState([]); // {quantity, name, price}
  const [appPage, setAppPage] = useState("adding-products"); // adding-products | generate-the-bill

  function addProduct() {
    setProducts((products) => {
      return [
        ...products,
        { quantity: productQuantity, name: productName, price: productPrice },
      ];
    });
  }

  return {
    products,
    setProducts,
    productQuantity,
    setProductQuantity,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    appPage,
    setAppPage,
    addProduct,
  };
}
