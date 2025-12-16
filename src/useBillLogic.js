import { useCallback, useState } from "react";

export function useBillLogic() {
  const [productQuantity, setProductQuantity] = useState(1); // 1-10
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(1); // 1-2000;
  const [products, setProducts] = useState([]); // {id, quantity, name, price}
  const [tip, setTip] = useState(0);
  const [appPage, setAppPage] = useState("adding-products"); // adding-products | add-tips | generate-the-bill
  const [modalOn, setModalOn] = useState(false);
  const [pubName, setPubName] = useState("");

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

  const editProduct = useCallback(
    (id, newProduct) => {
      const productsAfterEditing = products.map((product) => {
        return product.id === id ? { ...product, name: newProduct } : product;
      });
      setProducts(productsAfterEditing);
    },
    [products]
  );

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
    tip,
    setTip,
    modalOn,
    setModalOn,
    pubName,
    setPubName,
    addProduct,
    editProduct,
  };
}
