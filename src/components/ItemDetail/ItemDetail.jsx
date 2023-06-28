import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img,descripcion, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
    }

    return (
        <div className='contenedorItem tarjeta'>
            <h2> {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p> Descripción: {descripcion}</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail