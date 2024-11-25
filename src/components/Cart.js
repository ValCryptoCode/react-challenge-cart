import emptyCart from '../assets/images/illustration-empty-cart.svg'
import '../styles/Cart.css'

function Cart({ cart }) {
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    )

    const numberItem = cart.reduce((acc, item) => acc + item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="cart">
                <h2>Your Cart (0)</h2>
                <img src={emptyCart} alt="Empty cart" />
                <p>Your added items will appear here</p>
            </div>
        )
    } else {
        return (
            <div className="cart">
                <h2>Your Cart ({numberItem})</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={`${item.name}-${index}`}>
                            <span> {item.name} </span>
                            <span> {item.quantity}x </span>
                            <span> @${item.price} </span>
                            <span> -${item.price * item.quantity} </span>
                        </li>
                    ))}
                </ul>
                <div>
                    <span>Order Total: </span>
                    <span>${totalPrice}</span>
                </div>
            </div>
        )
    }
}
export default Cart
