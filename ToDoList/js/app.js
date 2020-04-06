const actividad = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const FinishToDo = document.querySelector("#toDoFinish");

eventListener();
CargarActividadLS();

function eventListener() {
  document.querySelector("#Lista").addEventListener("submit", GetActividades);
  listToDo.addEventListener("click", FinishList);
}

function GetActividades() {
  event.preventDefault();

  if (actividad.value.trim() == "") return;

  const instanciaActividad = new Actividades(actividad.value);
  instanciaActividad.AddActividadDOM(listToDo, true);

  actividad.value = "";
  // console.log(actividad);
}

function FinishList(contenidoActividad) {
  Actividades.removeActividadDOM(contenidoActividad);
  const liDelete = contenidoActividad.target.parentElement.parentElement;
  let txtLiDelete = liDelete.textContent.substring(0, liDelete.length - 1);

  const instanciaFin = new Actividades(txtLiDelete);
  instanciaFin.AddActividadDOM(FinishToDo, false);
}

function CargarActividadLS() {
  const ActividadLS = ManipularLocalStorage.GetLocalStorage();
  // console.log(ActividadLS);

  for (let i = 0; i < ActividadLS.length; i++) {
    const instanciaActividad = new Actividades(ActividadLS[i]);
    instanciaActividad.AddActividadDOM(listToDo, false);
  }
  const ActividadFin = ManipularLocalStorage.actividadFinLS();
  for (let i = 0; i < ActividadFin.length; i++) {
    const instanciaActividadFin = new Actividades(ActividadFin[i]);
    instanciaActividadFin.AddActividadDOM(ActividadFin, false);
  }
}
