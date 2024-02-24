import banner from "../../assets/banner3.png";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";


const Inicio = () => {
  const [productosInicio, setProductosInicio] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductosInicio(respuesta);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section className="mainSection">
      <img src={banner} alt="" className="w-100 img-fluid" />
      
      <Container>
      <h1 className="mt-5 display-2">Nuestros productos</h1>
      <hr />
      <Row className="d-flex justify-content-center mt-4">
      {productosInicio.map((productosInicio) => (
            <CardProducto
              key={productosInicio.id}
              producto={productosInicio}
              productosInicio={productosInicio}
            ></CardProducto>
          ))}
        
      </Row>
      </Container>
    </section>
  );
};

export default Inicio;
