import '../styles/App.css'
import Shop from './Shop'
import Cart from './Cart'
import '../assets/fonts/RedHatText-VariableFont_wght.ttf'
import { useState } from 'react'

function App() {
    const [cart, updateCart] = useState([])

    return (
        <div className="app">
            <Shop cart={cart} updateCart={updateCart} />
            <Cart cart={cart} />
        </div>
    )
}

export default App
