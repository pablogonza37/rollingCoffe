import { Container, Table, Button } from "react-bootstrap";
import producto1 from "../../assets/cafe_americano.png";
import producto2 from "../../assets/capuchino.png";
import producto3 from "../../assets/croissant_chocolate.png";
import producto4 from "../../assets/te_verde.png";




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
        <tr>
          <td>1</td>
          <td>Cafe americano</td>
          <td>$250</td>
          <td><img src={producto1} alt="imagen del producto" width={150} className="rounded mx-auto d-block img-fluid"/></td>
          <td>Bebida caliente</td>
          <td><Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
          <Button variant="danger"><i className="bi bi-trash"></i></Button>
          
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Capuchino</td>
          <td>$350</td>
          <td><img src={producto2} alt="imagen del producto" width={150} className="rounded mx-auto d-block"/></td>
          <td>Bebida caliente</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>croissant de chocolate</td>
          <td>$180</td>
          <td><img src={producto3} alt="imagen del producto" width={150} className="rounded mx-auto d-block"/></td>
          <td>Reposteria</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Té verde</td>
          <td>$200</td>
          <td><img src={producto4} alt="imagen del producto" width={150} className="rounded mx-auto d-block"/></td>
          <td>Bebida caliente</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </Container>
    );
};

export default Administrador;