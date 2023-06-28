import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ productos }) => {
  return (
    <Row className="contenedorProductos">
      {productos.map((prod) => (
        <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
          <Item {...prod} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;