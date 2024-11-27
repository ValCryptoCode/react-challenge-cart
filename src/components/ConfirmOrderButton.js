import '../styles/ConfirmOrderButton.css'

function ConfirmOrderButton({ updateIsOrderConfirmed }) {
    function orderConfirmed() {
        updateIsOrderConfirmed(true)
    }

    return (
        <input type="button" value="Confirm Order" onClick={orderConfirmed} />
    )
}

export default ConfirmOrderButton
