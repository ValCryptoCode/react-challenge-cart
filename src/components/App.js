import '../styles/App.css'
import Shop from './Shop'
import Cart from './Cart'
import '../assets/fonts/RedHatText-VariableFont_wght.ttf'
import { data } from '../data/data'
import { useState } from 'react'

function App() {
    const [cart, setCart] = useState([])

    return (
        <div className="app">
            <Shop cart={cart} setCart={setCart} />
            <Cart cart={cart} />
        </div>
    )
}

export default App
