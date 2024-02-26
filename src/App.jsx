import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/detalleProducto" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="/administrador/crear"
          element={<FormularioProducto editar={false} titulo='Nuevo producto'></FormularioProducto>}
        ></Route>
        <Route exact path="/administrador/editar/:id"
          element={<FormularioProducto editar={true} titulo='Editar Producto'></FormularioProducto>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
