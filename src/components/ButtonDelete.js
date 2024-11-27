import '../styles/ButtonDelete.css'

function ButtonDelete({ cart, updateCart, item }) {
    function deleteItem(item) {
        const cartWithoutItem = cart.filter(
            (dessert) => dessert.name !== item.name
        )
        updateCart(cartWithoutItem)
    }

    return (
        <button className="btn-delete" onClick={() => deleteItem(item)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
            >
                <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
            </svg>
        </button>
    )
}

export default ButtonDelete
