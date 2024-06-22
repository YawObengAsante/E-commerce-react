const CheckoutSidebar = () => {
  return (
    <aside>
      <h1>Total</h1>
      <div className="sub-total-and-amount-box">
        <h3>Sub Total</h3>
        <p>amount</p>
      </div>
      <div className="promo-code-box">
        <label htmlFor="promo code">Promo Code:</label>
        <input type="text" name="promo code" placeholder="Enter promo code" />
      </div>
      <div className="delivery-box">
        <h3>Delivery</h3>
        <img src="../../assests/icons/info.svg" alt="info" width="20px" />
      </div>
      <select name="delivery" id="delivery">
        <option defaultValue="standard">
          Standard Delivery
        </option>
        <option value="express">Express Delivery</option>
      </select>
      <button className="checkOutBtn">Check Out</button>
      <div className="we-accept-box">
        <h2>We accept</h2>
      </div>
      <div className="payment-image">
        <img
          src="https://th.bing.com/th?id=OIP.TQkOkUCjNbd_NTUKFq-9QAHaCB&w=350&h=95&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="Paypal"
        />
        <img
          src="https://th.bing.com/th?id=OIP.MZnfDm0dqmsgpVw55gCW2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="Master card"
        />
        <img
          src="data:image/jpeg;base64,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"
          alt="visa card"
        />
        <img
          src="https://th.bing.com/th?id=OIP.xFgqyR3Rzz3BWNzEp5ZSJgHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="apple pay"
        />
      </div>
    </aside>
  );
};

export default CheckoutSidebar;
