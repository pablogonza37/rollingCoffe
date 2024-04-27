import { Button, Card, Form, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../../../helpers/queries";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire({
        title: "Usuario logueado",
        text: `Bienvenido "${usuario.mail}"`,
        icon: "success",
      });
      navegacion("/administrador");
      setUsuarioLogueado(usuario.mail);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "El ususario o password son incorrectos",
        icon: "error",
      });
    }
  };

  return (
    <Container className="mainSection my-5 d-flex justify-content-center">
      <img
        src="https://images.pexels.com/photos/11739318/pexels-photo-11739318.jpeg"
        alt=""
        style={{ width: "25rem", height: "auto" }}
        className="img-fluid d-none d-lg-block shadow"
      />
      <Card style={{ width: "25rem" }} className="shadow rounded-0 border-0">
        <Card.Body>
          <h4 className="display-6 mb-4">Iniciar sesión</h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("mail", {
                  required: "Email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.mail?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "Contraseña es requerida",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Col>
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
            <Button variant="success" type="submit" className="w-100">
              Ingresar
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
