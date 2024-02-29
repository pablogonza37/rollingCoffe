import { Routes, Route } from "react-router-dom";

Routes

const RutasAdmin = () => {
    return (
        <>
          <Route
            exact
            path="/detalleProducto"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/crear"
            element={
              <FormularioProducto
                editar={false}
                titulo="Nuevo producto"
              ></FormularioProducto>
            }
          ></Route>
          <Route
            exact
            path="/editar/:id"
            element={
              <FormularioProducto
                editar={true}
                titulo="Editar Producto"
              ></FormularioProducto>
            }
          ></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route> 
        </>
    );
};

export default RutasAdmin;