import "./App.css";
import { useBillLogic } from "./useBillLogic";

export default function App() {
  const {
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
  } = useBillLogic();

  return (
    <section>
      <h1>Ckeck, please!</h1>
      {appPage === "adding-products" && (
        <main>
          <ul>
            {products.map((product, index) => {
              const { quantity, name, price } = product;
              return (
                <li key={index}>
                  <span>{quantity}</span>
                  <span>{name}</span>
                  <span>{price}</span>
                </li>
              );
            })}
          </ul>
          <section className="add-product-details-container">
            <input
              type="number"
              min="1"
              max="10"
              value={productQuantity}
              onChange={(event) => {
                setProductQuantity(event.target.value);
              }}
            ></input>
            <input
              type="text"
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            ></input>
            <input
              type="number"
              min="1"
              max="2000"
              value={productPrice}
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
            ></input>
          </section>
          <button className="add-product-button" onClick={addProduct}>
            Add item
          </button>
          <button className="finalize-button">Finalize</button>
        </main>
      )}
    </section>
  );
}
