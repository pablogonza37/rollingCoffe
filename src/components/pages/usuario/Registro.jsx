import { Button, Card, Form, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUsuarioAPI, editarUsuarioAPI, leerUsuariosAPI, obtenerUsuarioAPI } from "../../../helpers/queries";
import { useEffect, useState } from "react";

const Registro = ( {usuarioLogueado, rol, titulo, editar} ) => {
  const [rolPorDefecto] = useState("admin");
  const [rolVisible] = useState(editar || rol);
  const navegacion = useNavigate();
  const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
      } = useForm();

      useEffect(() => {
        if (editar) {
          cargarDatosUsuario();
        }
      }, [editar]);
    
      const cargarDatosUsuario = async () => {
        try {
          const respuesta = await obtenerUsuarioAPI(id);
          if (respuesta.status === 200) {
            const usuarioEncontrado = await respuesta.json();
            setValue("nombreUsuario", usuarioEncontrado.nombreUsuario);
            setValue("email", usuarioEncontrado.email);
            setValue("rol", usuarioEncontrado.rol);
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      const onSubmit = async (data) => {
        const usuario = {
          nombreUsuario: data.nombreUsuario,
          email: data.email,
          rol: data.rol || rolPorDefecto,
          password: data.password,
          suspendido: false,
        };
        if (editar) {
          const respuesta = await editarUsuarioAPI(usuario, id);
          if (respuesta.status === 200) {
            Swal.fire({
              title: "Usuario modificado",
              text: `El usuario "${usuario.nombre}" fue modificado correctamente`,
              icon: "success",
            });
            navegacion("/administrador/usuarios");
          } else {
            Swal.fire({
              title: "Ocurrió un error",
              text: `El usuario "${usuario.nombre}" no pudo ser modificado. Intente esta operación en unos minutos`,
              icon: "error",
            });
          }
        } else {
          
        const usuarios = await leerUsuariosAPI();
        const usuarioExistente = usuarios.find((user) => user.email === usuario.email);
    
        if (usuarioExistente) {
          Swal.fire({
            title: "Error",
            text: "Ya existe un usuario con este correo electrónico",
            icon: "error",
          });
          return;
        }
        const respuesta = await crearUsuarioAPI(usuario);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Usuario registrado",
        text: `El usuario "${usuario.nombreUsuario}" fue registrado correctamente`,
        icon: "success",
      });
      if (!usuarioLogueado) {
        navegacion("/login");
      }
      reset();
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: `El usuario "${usuario.nombreUsuario}" no pudo ser registrado. Intente esta operación en unos minutos`,
        icon: "error",
      });
    }
      }
    }

      const password = watch("password", "");

    return (
        <Container className="mainSection my-5 d-flex justify-content-center">
      <img
        src="https://images.pexels.com/photos/21558654/pexels-photo-21558654/free-photo-of-cafe-flores-cafeteria-mesa.jpeg"
        alt=""
        style={{ width: "25rem", height: "auto" }}
        className="img-fluid d-none d-lg-block shadow"
      />
      <Card style={{ width: "25rem" }} className="shadow rounded-0 border-0">
        <Card.Body>
          <h4 className="display-6 mb-4">{titulo}</h4>
          <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            {...register("nombreUsuario", {
              required: "El nombre de usuario es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre de usuario debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message:
                  "El nombre de usuario no puede tener más de 20 caracteres",
              },
            })}
          />
          {errors.nombreUsuario && (
            <p style={{ color: "red" }}>{errors.nombreUsuario.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", {
              required: "El correo electrónico es obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                message: "El correo electrónico ingresado no es válido",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </Form.Group>

        {rolVisible && (
          <Form.Group className="mb-3" controlId="formcategoria">
            <Form.Label>Rol*</Form.Label>
            <Form.Select
              {...register("rol", {
                required: "El rol es obligatorio",
              })}
            >
              <option value="usuario">Usuario</option>
              <option value="admin">Admin</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.rol?.message}</Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "el minimo es de 8 caracteres",
              },
              maxLength: {
                value: 12,
                message: "el maximo es de 15 caracteres",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repita la contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            {...register("confirmarContraseña", {
              required: "Confirmar la contraseña es obligatorio",
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmarContraseña && (
            <p style={{ color: "red" }}>{errors.confirmarContraseña.message}</p>
          )}
        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
            <Button variant="success" type="submit" className="w-100">
              Registrarse
            </Button>
            </div>
      </Form>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default Registro;