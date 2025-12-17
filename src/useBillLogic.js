import { useState } from "react";

export function useBillLogic() {
  const [appPage, setAppPage] = useState("adding-products"); // adding-products | add-tips | generate-bill
  const [pubName, setPubName] = useState("");
  const [products, setProducts] = useState([]); // {id, quantity, name, price}
  const [productQuantity, setProductQuantity] = useState(1); // 1-10
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(1); // 1-2000;
  const [modalOn, setModalOn] = useState(false);
  const [billOn, setBillOn] = useState(false);
  const [tips, setTips] = useState(0);

  const addProduct = () => {
    if (productQuantity === 0 || productQuantity > 10) {
      return;
    }
    if (productName.trim() === "" || productName.length === 0) {
      return;
    }
    if (productPrice === 0 || productPrice > 2000) {
      return;
    }

    const newProducts = [
      ...products,
      {
        id: crypto.randomUUID(),
        quantity: productQuantity,
        name: productName.trim(),
        price: productPrice,
      },
    ];
    setProducts(newProducts);
    setProductQuantity(1);
    setProductName("");
    setProductPrice(1);
  };

  // const editProduct = useCallback(
  //   (id, newProduct) => {
  //     const productsAfterEditing = products.map((product) => {
  //       return product.id === id ? { ...product, name: newProduct } : product;
  //     });
  //     setProducts(productsAfterEditing);
  //   },
  //   [products]
  // );

  const getProductsSum = (products) => {
    let sum = 0;
    for (const product of products) {
      sum += product.price * product.quantity;
    }
    return sum;
  };

  const getTips = (products, tips) => {
    return getProductsSum(products) * (tips / 100);
  };

  return {
    products,
    productQuantity,
    setProductQuantity,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    appPage,
    setAppPage,
    tips,
    setTips,
    modalOn,
    setModalOn,
    pubName,
    setPubName,
    addProduct,
    //    editProduct,
    getProductsSum,
    getTips,
    billOn,
    setBillOn,
  };
}
