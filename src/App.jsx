import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/producto/Login";
import DetalleProducto from "./components/pages/DetalleProducto";
import { useState } from "react";
import RutasAdmin from "./components/routes/RutasAdmin";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import Registro from "./components/pages/usuario/Registro";
import Contacto from "./components/pages/Contacto";
import Nosotros from "./components/pages/Nosotros";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioRollingCoffee")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route
            exact
            path="/registro"
            element={
              <Registro
                usuarioLogueado={usuarioLogueado}
                setUsuarioLogueado={setUsuarioLogueado}
                tituloRegistro="Registro"
                rol={false}
              ></Registro>
            }
          ></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
