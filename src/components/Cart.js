import '../styles/Cart.css'
import ItemCart from './ItemCart'
import CarbonNeutral from './CarbonNeutral'
import ConfirmOrderButton from './ConfirmOrderButton'
import TotalCart from './TotalCart'
import EmptyCart from './EmptyCart'

function Cart({ cart, updateCart, updateIsOrderConfirmed }) {
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    )

    const numberItem = cart.reduce((acc, item) => acc + item.quantity, 0)

    //Affichage 'Empty cart'
    if (cart.length === 0) {
        return <EmptyCart />

        //Affichage 'Cart'
    } else {
        return (
            <div className="cart">
                <h2>Your Cart ({numberItem})</h2>
                <ul>
                    <ItemCart cart={cart} updateCart={updateCart} />
                </ul>
                <TotalCart totalPrice={totalPrice} />
                <CarbonNeutral />
                <ConfirmOrderButton
                    updateIsOrderConfirmed={updateIsOrderConfirmed}
                />
            </div>
        )
    }
}
export default Cart
