class Actividades {
  contenido = "";
  localStorage;

  constructor(contenido) {
    this.contenido = contenido;
  }

  AddActividadDOM(contenedor, origen) {
    const li = document.createElement("li");
    li.classList = "list-group-item text-break";
    li.textContent = this.contenido;

    const btnRemove = document.createElement("button");
    btnRemove.classList = "close";

    const span = document.createElement("span");
    span.classList = "badge badge-pill text-danger";

    span.textContent = "x";

    contenedor.appendChild(li);
    li.appendChild(btnRemove);
    btnRemove.appendChild(span);

    console.log(this.contenido);

    if (origen) ManipularLocalStorage.AgregarActividadLS(this.contenido);
  }



  static removeActividadDOM(contenidoActividad) {
    if (event.target.tagName != "SPAN") return;
    const liDelete = contenidoActividad.target.parentElement.parentElement;
    let txtLiDelete = liDelete.textContent;
    txtLiDelete = txtLiDelete.substring(0, txtLiDelete.length - 1);

    ManipularLocalStorage.RemoveActividadLS(txtLiDelete);

    console.log(liDelete);

    liDelete.remove();
  }
}
