import '../styles/App.css'
import Shop from './Shop'
import Cart from './Cart'
import OrderConfirmed from './OrderConfirmed'
import '../assets/fonts/RedHatText-VariableFont_wght.ttf'
import { useState } from 'react'

function App() {
    const [cart, updateCart] = useState([])
    const [isOrderConfirmed, updateIsOrderConfirmed] = useState(false)

    return isOrderConfirmed === false ? (
        <div className="app">
            <Shop cart={cart} updateCart={updateCart} />
            <Cart
                cart={cart}
                updateCart={updateCart}
                updateIsOrderConfirmed={updateIsOrderConfirmed}
            />
        </div>
    ) : (
        <div className="app">
            <Shop cart={cart} updateCart={updateCart} />
            <Cart
                cart={cart}
                updateCart={updateCart}
                updateIsOrderConfirmed={updateIsOrderConfirmed}
            />
            <OrderConfirmed
                cart={cart}
                updateCart={updateCart}
                updateIsOrderConfirmed={updateIsOrderConfirmed}
            />
        </div>
    )
}

export default App
