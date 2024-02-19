import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import {useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Administrador = () => {
const [productos, setProductos] = useState([]);

useEffect(()=>{
leerProductosAPI
}, [])

  return (
    <Container>
       <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Button className="btn btn-primary" >
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
