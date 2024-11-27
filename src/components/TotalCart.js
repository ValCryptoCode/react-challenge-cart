import '../styles/TotalCart.css'

function TotalCart({ totalPrice }) {
    return (
        <div className="total-cart">
            <span>Order Total: </span>
            <span className="total-price">${totalPrice}</span>
        </div>
    )
}

export default TotalCart
