import "./App.css";
import { useBillLogic } from "./useBillLogic";
import { Modal } from "./Modal";
import { Bill } from "./Bill";

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
    tips,
    setTips,
    modalOn,
    setModalOn,
    pubName,
    setPubName,
    addProduct,
    editProductKey,
    productToBeEdited,
    setProductToBeEdited,
    getProductsSum,
    getTips,
    billOn,
    setBillOn,
  } = useBillLogic();

  return (
    <section className="app-container">
      {appPage === "adding-products" && (
        <>
          <h2>Ckeck, please!</h2>
          <section className="location">
            <h1>{pubName}</h1>
            <input
              type="text"
              className="pub-name"
              value={pubName}
              placeholder="Type pub's name..."
              onChange={(event) => {
                setPubName(event.target.value);
              }}
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
              <ul className="items-list">
                {products.map((product) => {
                  const { id, quantity, name, price } = product;

                  if (id === productToBeEdited) {
                    return (
                      <li key={id}>
                        <input
                          type="number"
                          className="editing-input"
                          min="1"
                          max="10"
                          defaultValue={productQuantity}
                          onKeyUp={(event) => {
                            if (event.key === "Enter") {
                              editProductKey(
                                id,
                                event.target.value,
                                "quantity"
                              );
                              setProductToBeEdited(null);
                            }
                          }}
                        ></input>
                        <input
                          type="text"
                          className="editing-input"
                          placeholder="Edit product name..."
                          defaultValue={productName}
                          onKeyUp={(event) => {
                            if (event.key === "Enter") {
                              editProductKey(id, event.target.value, "name");
                              setProductToBeEdited(null);
                            }
                          }}
                        ></input>
                        <input
                          type="number"
                          className="editing-input"
                          min="1"
                          max="2000"
                          defaultValue={productPrice}
                          onKeyUp={(event) => {
                            if (event.key === "Enter") {
                              editProductKey(id, event.target.value, "price");
                              setProductToBeEdited(null);
                            }
                          }}
                        ></input>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={id}
                      onDoubleClick={() => {
                        setProductToBeEdited(id);
                      }}
                    >
                      <span className="price-quantity-container">
                        {quantity}
                      </span>
                      <span className="name-container">{name}</span>
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
          <h2>Ckeck, please!</h2>
          <h1>{pubName}</h1>
          <Modal
            tips={tips}
            setAppPage={setAppPage}
            setTips={setTips}
            setBillOn={setBillOn}
          />
        </>
      ) : null}
      {billOn && appPage === "generate-bill" ? (
        <>
          <Bill
            products={products}
            tips={tips}
            getProductsSum={(products) => getProductsSum(products)}
            getTips={getTips}
          />
        </>
      ) : null}
    </section>
  );
}
