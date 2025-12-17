export function Bill({ products, tips, getProductsSum, getTips }) {
  return (
    <section className="bill-container">
      <ul>
        {products.map((product) => {
          return (
            <li className="bill-item" key={product.id}>
              <div>
                {product.quantity} × <b>{product.name}</b>
              </div>
              <div className="separator"></div>
              <div>{product.price}</div>
            </li>
          );
        })}
      </ul>
      <div className="bigger-separator"></div>
      <div className="bill-item">
        <div>
          <b>Subtotal:</b>{" "}
        </div>
        <div className="separator"></div>
        <div> {getProductsSum(products)}</div>
      </div>
      <div className="bill-item">
        <div>
          <b>{tips}% tips:</b>
        </div>
        <div className="separator"></div>
        <div> {getTips(products, tips)}</div>
      </div>
      <div className="bigger-separator"></div>
      <div className="bill-item">
        <div>
          <b>Total:</b>
        </div>
        <div className="separator"></div>
        <div> {getProductsSum(products) + getTips(products, tips)}</div>
      </div>
      <div>
        <b>Thank you!</b>
      </div>
    </section>
  );
}
