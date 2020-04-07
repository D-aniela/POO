const TablaCarrito = document.querySelector("#lista-carrito tbody");

eventListener();

function eventListener() {
  document
    .querySelector("#lista-cursos")
    .addEventListener("click", GuardarCursoCarrito);

  document.querySelector("#carrito").addEventListener("click", eliminarcarrito);

  document
    .querySelector("#vaciar-carrito")
    .addEventListener("click", vaciarCarrito);

  iniciarCarrito();
}

function GuardarCursoCarrito(event) {
  // Quita la accion del anchor, los elementos que redireccionan
  event.preventDefault();
  //   console.log(typeof event.target.classList);
  if (event.target.classList.value.search("agregar-carrito") == -1) return;
  //   console.log("presionado");

  const curso = event.target.parentElement.parentElement;
  //   console.log(curso);

  const informacionCurso = {
    image: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
  };
  //   console.log(informacionCurso);
  const carrito = new Carrito();
  carrito.AgregarCursoCarrito(informacionCurso, TablaCarrito, true);
}

function iniciarCarrito() {
  const cursosLS = ManipularLocalStorage.obtenerCursoLocalStorage();

  for (let i = 0; i < cursosLS.length; i++) {
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(cursosLS[i], TablaCarrito, false);
  }
}

function eliminarcarrito(event) {
  if (event.target.className != "borrar-curso") return;

  Carrito.eliminarCursoCarrito(event.target.parentElement.parentElement);
}

function vaciarCarrito() {
  Carrito.vaciarCarrito(TablaCarrito);
}
