import banner from "../../assets/banner3.png";
import { Row, Container, Spinner, Form } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Inicio = () => {
  const [productosInicio, setProductosInicio] = useState([]);
  const [error, setError] = useState(null);
  const [spinnerInicio, setSpinnerInicio] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  useEffect(() => {
    consultarAPI();
    filtrarProductosPorCategoria()
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerInicio(true);
      const respuesta = await leerProductosAPI();
      setProductosInicio(respuesta);
      setError(null);
      setSpinnerInicio(false);
    } catch (error) {
      console.log(error);
      setSpinnerInicio(false);
      setError("Error al cargar los datos desde la API");
    }
  };

  
  const filtrarProductosPorCategoria = () => {
    if (categoriaSeleccionada === "Todas") {
      return productosInicio; 
    } else {
      return productosInicio.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      ); 
    }
  };

  return (
    <section className="mainSection">
      <img src={banner} alt="" className="w-100 img-fluid" />
      {error && (
        <div className="alert alert-danger mt-3 container text-danger">
          {error}
        </div>
      )}
      {!error && productosInicio.length === 0 && (
        <div className="alert alert-info mt-3 container text-danger">
          No hay datos.
        </div>
      )}
      {productosInicio.length > 0 && (
        <Container>
          <h1 className="mt-5 display-2">Nuestros productos</h1>
          <hr />
          <Form.Group controlId="categoriaSelect">
            <Form.Label>Filtrar por categoría:</Form.Label>
            <Form.Control
              as="select"
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            </Form.Control>
          </Form.Group>
          {spinnerInicio ? (
            <div className="my-4 text-center">
              <Spinner animation="border" variant="dark" />
            </div>
          ) : (
            <Row className="d-flex justify-content-center mt-4">
              {filtrarProductosPorCategoria().map((producto) => (
                <CardProducto
                  key={producto._id}
                  producto={producto}
                  productosInicio={producto}
                ></CardProducto>
              ))}
            </Row>
          )}
        </Container>
      )}
    </section>
  );
};

export default Inicio;
