import addToCart from '../assets/images/icon-add-to-cart.svg'
import decrementQty from '../assets/images/icon-decrement-quantity.svg'
import incrementQty from '../assets/images/icon-increment-quantity.svg'
import '../styles/Button.css'

function Button({ cart, updateCart, selectedItem }) {
    const currentItem = cart.find((item) => item.name === selectedItem.name)
    function increment() {
        if (currentItem) {
            const updatedCart = cart.map((item) =>
                item.name === selectedItem.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : { ...item }
            )
            updateCart(updatedCart)
        } else {
            updateCart([...cart, { ...selectedItem, quantity: 1 }])
        }
    }

    function decrement() {
        const updatedCart = cart.map((item) =>
            item.name === selectedItem.name
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item }
        )
        updateCart(updatedCart)
    }

    // AFFICHAGE //

    if (currentItem && currentItem.quantity > 0) {
        return (
            <div className="btn-addToCart changeQty">
                <button onClick={decrement}>
                    <img src={decrementQty} alt="decrement" />
                </button>
                <button onClick={increment}>
                    <img src={incrementQty} alt="increment" />
                </button>
            </div>
        )
    } else {
        return (
            <button className="btn-addToCart" onClick={increment}>
                <img src={addToCart} alt="Add to cart" />
                <span>Add to cart</span>
            </button>
        )
    }
}

export default Button
