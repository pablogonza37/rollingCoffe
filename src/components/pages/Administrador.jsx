import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
  return (
    <Container>
      <h1 className="h1 display-2">Productos disponibles</h1>
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
