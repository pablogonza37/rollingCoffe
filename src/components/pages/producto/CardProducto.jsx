import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({productosInicio}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100 rounded shadow-lg">
        <div>
          <img
            src={productosInicio.imagen}
            alt="cafe"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">{productosInicio.nombreProducto}</Card.Title>
          <Card.Text>
            {productosInicio.descripcionBreve}{" "}
            <br className="mb-2" />
            <span className="fw-bold">${productosInicio.precio}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button className="btn btn-success me-2">Ver más</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
