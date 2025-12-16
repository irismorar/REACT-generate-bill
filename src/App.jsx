import "./App.css";
import { useBillLogic } from "./useBillLogic";
import { Modal } from "./Modal";

export default function App() {
  const {
    products,
    productQuantity,
    setProductQuantity,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    appPage,
    setAppPage,
    modalOn,
    setModalOn,
    pubName,
    setPubName,
    addProduct,
    editProduct,
  } = useBillLogic();

  return (
    <section className="app-container">
      <h2>Ckeck, please!</h2>
      {appPage === "adding-products" && (
        <>
          <section className="location">
            <h1>{pubName}</h1>
            <input
              type="text"
              className="pub-name"
              placeholder="Type pub name..."
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setPubName(event.target.value);
                  event.target.value = "";
                }
              }}
            ></input>
          </section>
          <main>
            <section className="add-items">
              <ul>
                {products.map((product) => {
                  const { id, quantity, name, price } = product;
                  return (
                    <li key={id}>
                      <span className="price-quantity-container">
                        {quantity}
                      </span>
                      <span
                        className="name-container"
                        onDoubleClick={(event) => {
                          editProduct(id, event.target.value);
                        }}
                      >
                        {name}
                      </span>
                      <span className="price-quantity-container">{price}</span>
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
                    setProductQuantity(Number(event.target.value));
                  }}
                ></input>
                <input
                  type="text"
                  placeholder="Type product..."
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
                    setProductPrice(Number(event.target.value));
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      addProduct();
                    }
                  }}
                ></input>
              </section>
              <section>
                <button onClick={addProduct}>Add item</button>
                <button
                  onClick={() => {
                    setAppPage("add-tips");
                    setModalOn(true);
                  }}
                >
                  Finalize
                </button>
              </section>
            </section>
          </main>
        </>
      )}
      {modalOn && appPage === "add-tips" ? (
        <>
          <h1>{pubName}</h1>
          <Modal />
        </>
      ) : null}
    </section>
  );
}
