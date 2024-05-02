import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/producto/FormularioProducto";
import Registro from "../pages/usuario/Registro"

Routes;

const RutasAdmin = ({usuarioLogueado}) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/productos"
          element={<Administrador tipo="productos"></Administrador>}
        ></Route>
        <Route
          exact
          path="/usuarios"
          element={<Administrador tipo="usuarios" />}
        />
        <Route
          exact
          path="productos/crear"
          element={
            <FormularioProducto
              editar={false}
              titulo="Nuevo producto"
            ></FormularioProducto>
          }
        ></Route>
        <Route
          exact
          path="productos/editar/:id"
          element={
            <FormularioProducto
              editar={true}
              titulo="Editar Producto"
            ></FormularioProducto>
          }
        ></Route>
         <Route
            exact
            path="/usuarios/crear"
            element={
              <Registro
                editar={false}
                rol={true}
                titulo="Crear usuario"
                usuarioLogueado={usuarioLogueado}
              ></Registro>
            }
          ></Route>
          <Route
          exact
          path="usuarios/editar/:id"
          element={
            <Registro
              editar={true}
              titulo="Editar Usuario"
              rol=""
            ></Registro>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
