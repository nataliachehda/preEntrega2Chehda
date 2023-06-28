import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = React.useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Button variant="secondary" onClick={decrementar}>
          -
        </Button>
        <Button variant="light" disabled>
          {contador}
        </Button>
        <Button variant="secondary" onClick={incrementar}>
          +
        </Button>
      </ButtonGroup>
      <Button className='botoni' variant='dark' onClick={() => funcionAgregar(contador)}>Agregar al Carrito</Button>
    </>
  );
};

export default ItemCount;
