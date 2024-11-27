import addToCart from '../assets/images/icon-add-to-cart.svg'
import '../styles/ButtonAddToCart.css'

import ButtonQuantity from './ButtonQuantity'

function ButtonAddToCart({ cart, updateCart, selectedItem }) {
    // Fonction d'incrémenation de la quantité
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

    //Affichage boutons d'incrémentation
    if (currentItem && currentItem.quantity > 0) {
        return (
            <div className="btn btn-quantity">
                <ButtonQuantity
                    value="decrement"
                    updateCart={updateCart}
                    cart={cart}
                    selectedItem={selectedItem}
                />
                <span>{currentItem.quantity}</span>
                <ButtonQuantity
                    value="increment"
                    updateCart={updateCart}
                    cart={cart}
                    selectedItem={selectedItem}
                />
            </div>
        )

        // Affichage 'Add to Cart'
    } else {
        return (
            <button className="btn btn-addToCart" onClick={increment}>
                <img src={addToCart} alt="Add to cart" />
                <span>Add to cart</span>
            </button>
        )
    }
}

export default ButtonAddToCart
