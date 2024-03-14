import { Container, Table, Spinner } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [spinnerAdimistrador, setSpinnerAdimistrador] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
      setSpinnerAdimistrador(false);
      setError(null)
    } catch (error) {
      console.log(error);
      setError("Error al cargar los datos desde la API"); 
      setSpinnerAdimistrador(false);
    }
  };

  const mostrarComponente = spinnerAdimistrador ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Table responsive striped bordered hover>
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
      {productos.map((productos) => (
        <ItemProducto
          key={productos.id}
          producto={productos}
          setProductos={setProductos}
        ></ItemProducto>
      ))}
    </tbody>
  </Table>
  );


  return (
    <Container className="mainSection text-center">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      {!error && productos.length === 0 && (
          <>
            <div className="alert alert-info mt-3 container text-danger">
              No hay datos.
            </div>
          </>
        )}
      {mostrarComponente}
      {error && <div className="alert alert-danger mt-3">{error}</div>}     
    </Container>
  );
};

export default Administrador;
