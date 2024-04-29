const URL_Productos = import.meta.env.VITE_API_PRODUCTO;
const URL_Usuarios = import.meta.env.VITE_API_USUARIO;


export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Productos);
    if (!respuesta.ok) {
      throw new Error('No se pudo cargar la lista de recetas');
    }
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    throw new Error('Error al cargar las productos desde la API: ' + error.message);
  }
};

export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_Productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Productos}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Productos + "/" + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Productos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(URL_Usuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


const userAdmin = {
  mail: "admin@rollingcoffee.com",
  password: "prueba123",
};

export const login = (usuario) => {
  if (
    usuario.mail === userAdmin.mail &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "usuarioRollingCoffee",
      JSON.stringify(usuario.mail)
    );
    return true;
  } else {
    return false;
  }
};
