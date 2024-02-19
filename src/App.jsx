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

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
