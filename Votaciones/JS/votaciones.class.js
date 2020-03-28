class Votaciones {
  AFavor = 0;
  EnContra = 0;
  Abstencion = 0;
  Fin = 0;

  ValidarClick(GetButton) {
    switch (GetButton) {
      case "btnFavor":
        AFavor = this.AFavor++;
        break;

      case "btnContra":
        this.EnContra++;
        break;

      case "btnAbstencion":
        this.Abstencion++;
        break;

      case "btnFin":
        this.Fin = this.AFavor, this.EnContra, this.Abstencion;
        // console.log(this.Fin);
        const output = document.getElementById("output");
        const div = document.createElement("div");
        div.setAttribute("class", "alert alert-primary text-center mt-2");
        div.innerText = `A Favor: ${this.AFavor} 
        En Contra: ${this.EnContra}  
        Abstencion: ${this.Abstencion}`;
    
        output.appendChild(div);
        break;
      }
      // console.log(this.Fin);
      console.log(this.AFavor, this.EnContra, this.Abstencion);
  }
}
