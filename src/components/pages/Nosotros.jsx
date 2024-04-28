import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <section className="mainSection">
      <Container className="my-4">
        <h2 className="display-5 my-3">¿QUIÉNES SOMOS?</h2>
        <hr />
        <img
          src="https://images.pexels.com/photos/3952080/pexels-photo-3952080.jpeg"
          alt=""
          className="imgFluid imgNosotros"
        />
        <p className="lead mt-4">
          Bienvenido a nuestra cafetería, un rincón acogedor donde el aroma del
          café recién tostado te da la bienvenida y el sabor de nuestras
          deliciosas creaciones te invita a quedarte un poco más. En nuestro
          espacio, cada taza es más que una simple bebida; es una experiencia
          que te transporta a un mundo de sabores y sensaciones. <br />
          <br />
          Nuestro café es cuidadosamente seleccionado de las mejores cosechas,
          garantizando frescura y calidad en cada sorbo. Desde el primer café de
          la mañana hasta el último espresso después de la cena, estamos aquí
          para satisfacer tus antojos de café con una amplia variedad de
          opciones, desde los clásicos cortados y cappuccinos hasta creaciones
          únicas preparadas por nuestros baristas expertos.
        </p>
        <hr />
      </Container>

      <Container>
        <h3 className="display-6 my-4">Restaurantes</h3>

        <Row>
          <Col md={6}>
            <img
              src="https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="lead m-auto mt-4">
            Su cafetería se ha transformado en un restaurante completo, con
            servicio desde el desayuno hasta la cena, y cuatro de sus sucursales
            cuentan incluso con servicio de bar. Rolling Coffee ha sido
            reconocido por diversos medios como una de las 10 cafeterias más
            bellas del pais. <br />
            <br />
            Ven y únete a nosotros en un viaje de sabores y aromas que
            seguramente despertarán tus sentidos y dejarán una impresión
            duradera. Te esperamos con los brazos abiertos en nuestra acogedora
            cafetería, donde cada taza cuenta una historia de pasión por el café
            y el placer de compartir momentos inolvidables.
            <div className="mt-5">
              <Link to="/">CONOCE NUESTRO MENÚ</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;
