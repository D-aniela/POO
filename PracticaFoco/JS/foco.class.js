class Foco {
  //propiedad
  estado = false;

  // Método
  CambiarEstado() {
    this.estado = !this.estado;
    // Si estado=true foco esta prendido
    if (this.estado) {
      return "./../assets/focoprendido.jpg";
    } else {
      return "./../assets/focoapagado.jpg";
    }
  }
}
