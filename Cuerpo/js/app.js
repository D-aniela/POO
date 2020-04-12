eventListener();

function eventListener() {
  contenedor.addEventListener("click", GetBodyPart);
}

function GetBodyPart(event) {
  // console.log(event);
  const output = document.getElementById("output");

  const idiomaSel = document.getElementById("idioma").value;
  // console.log(idiomaSel);

  const charizard = new Charizard(event.x, event.y, idiomaSel);
  console.log(charizard);

  const parte = charizard.posicionCharizard();
  // console.log(charizard.posicionCharizard());
}
