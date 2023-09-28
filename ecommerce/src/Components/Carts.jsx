import classNames from "classnames";
import './Carts.css'
const Carts = ({ cart }) => {
     return (
        <div className={classNames("cart-container")}>
        <h2 className={classNames("cart-heading")}>My Cart</h2>
        {cart.length === 0 ? (
            <p className={classNames("cart-empty-message")}>Your cart is empty.</p>
        ) : (
            <ul className={classNames("cart-list")}>
                {cart.map((product, index) => (
                    <li key={index} className={classNames("cart-item")}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        )}
        </div>
    );
};

  
export default Carts;
  