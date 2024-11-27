import ButtonDelete from './ButtonDelete'
import '../styles/ItemsCart.css'

function ItemCart({ cart, updateCart }) {
    return (
        <>
            {cart.map((item, index) =>
                item.quantity > 0 ? (
                    <li key={`${item.name}-${index}`} className="items-cart">
                        <div>
                            <span className="title-item">{item.name}</span>
                            <br />
                            <span className="quantity-item">
                                {item.quantity}x
                            </span>
                            <span className="price-item">
                                @${item.price.toFixed(2)}
                            </span>
                            <span className="total-price-item">
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                        <div>
                            <ButtonDelete
                                cart={cart}
                                updateCart={updateCart}
                                item={item}
                            />
                        </div>
                    </li>
                ) : null
            )}
        </>
    )
}

export default ItemCart
