function eventListener() {
  document.getElementById("btnAceptar").addEventListener("click", AbrirVentana);
}

const votaciones = new Votaciones();
eventListener();

function AbrirVentana() {
  label.remove();
  contenedor.remove();
  const output = document.getElementById("output");
  const input = document.getElementById("input");
  input.disabled = true;

  const buttonFavor = document.createElement("button");
  buttonFavor.setAttribute("class", "btn btn-success btn-block mt-2");
  buttonFavor.setAttribute("id", "btnFavor");
  buttonFavor.innerText = "A favor";

  const buttonContra = document.createElement("button");
  buttonContra.setAttribute("class", "btn btn-danger btn-block mt-2");
  buttonContra.setAttribute("id", "btnContra");
  buttonContra.innerText = "En contra";

  const buttonAbs = document.createElement("button");
  buttonAbs.setAttribute("class", "btn btn-info btn-block mt-2");
  buttonAbs.setAttribute("id", "btnAbstencion");
  buttonAbs.innerText = "Abstencion";

  const buttonFin = document.createElement("button");
  buttonFin.setAttribute("class", "btn btn-warning btn-block mt-2");
  buttonFin.setAttribute("id", "btnFin");
  buttonFin.innerText = "Finalizar";

  output.appendChild(buttonFavor);
  output.appendChild(buttonContra);
  output.appendChild(buttonAbs);
  output.appendChild(buttonFin);
  eventButton();
}

function eventButton() {
  document.addEventListener("click", ValidarClick);
}

function ValidarClick(event) {
  votaciones.ValidarClick(event.target.id);
}
