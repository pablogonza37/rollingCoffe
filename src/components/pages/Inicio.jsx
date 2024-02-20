import banner from "../../assets/banner3.png";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import producto1 from "../../assets/cafe_americano.png";
import producto2 from "../../assets/capuchino.png";
import producto3 from "../../assets/croissant_chocolate.png";
import producto4 from "../../assets/te_verde.png";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img src={banner} alt="" className="w-100 img-fluid" />
      
      <Container>
      <h1 className="mt-5 display-2">Nuestros productos</h1>
      <hr />
      <Row className="d-flex justify-content-center mt-4">
        <Col md={4} className="mb-2" >
          <Card >
            <Card.Img variant="top" src={producto1} />
            <Card.Body>
              <Card.Title>Cafe americano</Card.Title>
              <Card.Text className="lead">
                Descripcion: Una taza de cafe suave y aromatico.
              </Card.Text>
              <p className="h5"><strong>Precio: $250</strong></p>
              
            </Card.Body>
            <Card.Footer className="text-muted text-end"><Button variant="success">Ver más</Button></Card.Footer>
          </Card>
        </Col>

        <Col md={4} className="mb-2" >
          <Card >
            <Card.Img variant="top" src={producto2} />
            <Card.Body>
              <Card.Title>Capuchino</Card.Title>
              <Card.Text className="lead">
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <p className="h5"><strong>Precio: $250</strong></p>
            </Card.Body>
            <Card.Footer className="text-muted text-end"><Button variant="success">Ver más</Button></Card.Footer>
          </Card>
        </Col>

        <Col md={4} className="mb-2" >
          <Card >
            <Card.Img variant="top" src={producto3} />
            <Card.Body>
              <Card.Title>Croissant de chocolate</Card.Title>
              <Card.Text className="lead">
                Descripcion: Delicioso croissant relleno de suave chocolate.
              </Card.Text>
              <p className="h5"><strong>Precio: $250</strong></p>
            </Card.Body>
            <Card.Footer className="text-muted text-end"><Button variant="success">Ver más</Button></Card.Footer>
          </Card>
        </Col>

        <Col md={4} className="mb-2" >
          <Card>
            <Card.Img variant="top" src={producto4} />
            <Card.Body>
              <Card.Title>Té verde</Card.Title>
              <Card.Text className="lead">
                Descripcion: Té verde organico con un sabor suave y revitalizante.
              </Card.Text>
              <p className="h5"><strong>Precio: $250</strong></p>
            </Card.Body>
            <Card.Footer className="text-muted text-end"><Button variant="success">Ver más</Button></Card.Footer>
          </Card>
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default Inicio;
