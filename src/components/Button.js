import addToCart from '../assets/images/icon-add-to-cart.svg'
import decrementQty from '../assets/images/icon-decrement-quantity.svg'
import incrementQty from '../assets/images/icon-increment-quantity.svg'
import '../styles/Button.css'

function Button({ cart, setCart, name, price }) {
    function increment(name, price) {
        const target = cart.find((dessert) => dessert.name === name)
        if (target) {
            const filteredCart = cart.filter((dessert) => dessert.name !== name)
            setCart([
                ...filteredCart,
                {
                    name,
                    price,
                    quantity: target.quantity + 1,
                },
            ])
        } else {
            setCart([...cart, { name, price, quantity: 1 }])
        }
    }

    // const selectedItem = cart.find((item) => item.name === name)
    // console.log(selectedItem)
    // function decrement() {
    //     setCart(cart - 1)
    // }
    // if (name === 0) {
    return (
        <button
            className="btn-addToCart"
            onClick={() => increment(name, price)}
        >
            <img src={addToCart} alt="Add to cart" />
            <span>Add to cart</span>
        </button>
    )
    // } else {
    //     return (
    //         <div className="btn-addToCart changeQty">
    //             <button onClick={increment}>
    //                 <img src={decrementQty} alt="Increment" />
    //             </button>
    //             <button onClick={increment}>
    //                 <img src={incrementQty} alt="Decrement" />
    //             </button>
    //         </div>
    //     )
    // }
}

export default Button
