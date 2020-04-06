class ManipularLocalStorage {
  static ArrayActividad = [];
  // static ArrayActividadFin = [];

  static AgregarActividadLS(contenidoActividad) {
    this.ArrayActividad = this.GetLocalStorage();
    this.ArrayActividad.push(contenidoActividad);

    localStorage.setItem("actividades", JSON.stringify(this.ArrayActividad));
  }

  static GetLocalStorage() {
    let GetActividadLS = [];

    if (localStorage.getItem("actividades") == null) {
      return GetActividadLS;
    }

    return JSON.parse(localStorage.getItem("actividades"));
  }

  static actividadFinLS() {
    let Finish = [];

    if (localStorage.getItem("actividadesFin") == null) {
      return Finish;
    }

    return JSON.parse(localStorage.getItem("actividadesFin"));
  }

  static RemoveActividadLS(contenido) {
    let actividadLS = this.GetLocalStorage();
    let newActividadLS = [];

    for (let i = 0; i < actividadLS.length; i++) {
      if (contenido !== actividadLS[i]) {
        newActividadLS.push(actividadLS[i]);
      }
    }
    localStorage.setItem("actividades", JSON.stringify(newActividadLS));
  }
}
