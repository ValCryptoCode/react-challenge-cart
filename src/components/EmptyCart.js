import emptyCart from '../assets/images/illustration-empty-cart.svg'

function EmptyCart() {
    return (
        <div className="cart">
            <h2>Your Cart (0)</h2>
            <img src={emptyCart} alt="Empty cart" />
            <p>Your added items will appear here</p>
        </div>
    )
}

export default EmptyCart
