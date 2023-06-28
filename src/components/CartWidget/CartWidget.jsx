import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../img/cart.jpg";

    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
            <strong className='numerito'> 5 </strong>
        </div>
    )
}

export default CartWidget