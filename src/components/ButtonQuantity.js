import '../styles/ButtonQuantity.css'

function ButtonQuantity({ value, updateCart, cart, selectedItem }) {
    const currentItem = cart.find((item) => item.name === selectedItem.name)

    // Fonction d'incrémentation de la quantité
    function increment() {
        if (currentItem) {
            const updatedCart = cart.map((item) =>
                item.name === selectedItem.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : { ...item }
            )
            updateCart(updatedCart)
        } else {
            updateCart([...cart, { ...selectedItem, quantity: 1 }])
        }
    }

    // Fonction de décrémentation de la quantité
    function decrement() {
        const updatedCart = cart.map((item) =>
            item.name === selectedItem.name
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item }
        )

        //Suppression d'item si quantity = 0
        const filteredCart = updatedCart.filter((item) => item.quantity !== 0)

        updateCart(filteredCart)
    }

    // Affichage boutton (-)
    if (value === 'decrement') {
        return (
            <button onClick={decrement} className="btn-increment">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
            </button>
        )

        // Affichage boutton (+)
    } else if (value === 'increment') {
        return (
            <button onClick={increment} className="btn-decrement">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                >
                    <path
                        fill="#fff"
                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                </svg>
            </button>
        )
    }
}

export default ButtonQuantity
