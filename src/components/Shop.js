import { data } from '../data/data'
import ButtonAddToCart from './ButtonAddToCart'
import '../styles/Shop.css'

function Shop({ cart, updateCart }) {
    return (
        <div className="desserts">
            <h1>Desserts</h1>
            <div className="grid-desserts">
                {data.map((dessert, index) => (
                    <div key={`${dessert.name}-${index}`} className="item">
                        <div className="container">
                            <img
                                className={
                                    cart.find(
                                        (item) => item.name === dessert.name
                                    )
                                        ? 'imgItem selected'
                                        : 'imgItem'
                                }
                                src={dessert.image.desktop}
                                alt={dessert.name}
                            />
                            <ButtonAddToCart
                                cart={cart}
                                updateCart={updateCart}
                                selectedItem={dessert}
                            />
                        </div>
                        <h3>{dessert.category}</h3>
                        <h2>{dessert.name}</h2>
                        <p>${dessert.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Shop
