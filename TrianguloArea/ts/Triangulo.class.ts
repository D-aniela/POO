export class Triangulo {
  // La propiedad publica se puede utilizar en cualquier
  // otro lado fuera de la clase
  public base: number = 0;
  public altura: number = 0;
  public area: number = 0;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;

    this.area = (this.base * this.altura) / 2;
  }
}
