import { data } from '../data/data'
import Button from './Button'
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
                                className="imgItem"
                                src={dessert.image.desktop}
                                alt={dessert.name}
                            />
                            <Button
                                cart={cart}
                                updateCart={updateCart}
                                selectedItem={dessert}
                            />
                        </div>
                        <h3>{dessert.category}</h3>
                        <h2>{dessert.name}</h2>
                        <p>${dessert.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Shop
