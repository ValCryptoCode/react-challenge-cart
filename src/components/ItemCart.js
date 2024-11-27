function ItemCart({ cart }) {
    return (
        <>
            {cart.map((item, index) =>
                item.quantity > 0 ? (
                    <li key={`${item.name}-${index}`}>
                        <span> {item.name} </span>
                        <span> {item.quantity}x </span>
                        <span> @${item.price} </span>
                        <span> -${item.price * item.quantity} </span>
                    </li>
                ) : null
            )}
        </>
    )
}

export default ItemCart
