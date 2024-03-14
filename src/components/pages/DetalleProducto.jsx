import { Container, Card, Row, Col, Spinner } from "react-bootstrap";
import { obtenerProductoAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {

  const [productoSelecionado, setProductoSelecionado] = useState([]);
  const [spinnerDetalle, setSpinnerDetalle] = useState(true);
  const [error, setError] = useState(null); 

  const { id } = useParams();

  useEffect(() => {
    cargarDatosProducto();
  }, []);

  const cargarDatosProducto = async () => {
    try {
      const respuesta = await obtenerProductoAPI(id);
      if (respuesta.status === 200) {
        const productoEncontrado = await respuesta.json();
        setProductoSelecionado(productoEncontrado);
      } 
      setSpinnerDetalle(false);
      setError(null)
    } catch (error) {
      console.log(error);
      setError("Error al cargar los datos desde la API"); 
      setSpinnerDetalle(false);
    }
  };

  const mostrarComponente = spinnerDetalle ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Card>
    <Row>
      <Col md={6}>
        <Card.Img
          variant="top"
          src={productoSelecionado.imagen}
        />
      </Col>
      <Col md={6}>
        <Card.Body>
          <Card.Title className="primary-font">{productoSelecionado.nombreProducto}</Card.Title>
          <hr />
          <Card.Text>
         {productoSelecionado.descripcionAmplia}
          <br/>
          <br/>
          <span className="primary-font fw-semibold ">Categoria:</span> {productoSelecionado.categoria}
          <br />
          <br />
          <span className="primary-font fw-semibold ">Precio: $ {productoSelecionado.precio}</span></Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
  );



  return (
    <Container className="my-3 mainSection">
     {error && <div className="alert alert-danger mt-3">{error}</div>}
      {mostrarComponente}
    </Container>
  );
};

export default DetalleProducto;