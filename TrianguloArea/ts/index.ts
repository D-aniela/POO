import { Triangulo } from './Triangulo.class';

eventLister();

function eventLister() {
  // El signo de interrogacion pregunta si btnCalcular es nula
  // Agrega addEventListener
  document
    .getElementById("btnCalcular")
    ?.addEventListener("click", CalcularArea);
}

function CalcularArea() {
  // document.getElementById me regresara un html input element
  //   Declarar que altura es de tipo HTML input element
  //   Declarar que altura es string
  //   <> Es para re afirmar que el elemento sera tipo input
  const altura: number = Number((<HTMLInputElement>document.getElementById("Altura"))
    .value);

  const base: number = Number((<HTMLInputElement>document.getElementById("Base"))
    .value);

    const triangulo = new Triangulo(base, altura);

    console.log(triangulo.area);
}
