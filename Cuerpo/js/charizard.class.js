class Charizard {
  posicionX = 0;
  posicionY = 0;
  idioma = "";

  constructor(posicionX, posicionY, idioma) {
    this.idioma = idioma;
    this.posicionX = posicionX;
    this.posicionY = posicionY;

    // console.log(this.posicionX);
    // console.log(this.idioma);
  }

  posicionCharizard() {
    const parteCuerpo = document.getElementById("ParteCuerpo");
    let parte = "";
    switch (this.idioma) {
      case "1":
        if (
          this.posicionX > 351 &&
          this.posicionX < 365 &&
          this.posicionY > 198 &&
          this.posicionY < 210
        ) {
          parte = "right eye";
        } else if (
          this.posicionX > 271 &&
          this.posicionX < 279 &&
          this.posicionY > 200 &&
          this.posicionY < 212
        ) {
          parte = "left eye";
        } else if (
          this.posicionX > 286 &&
          this.posicionX < 315 &&
          this.posicionY > 104 &&
          this.posicionY < 137
        ) {
          parte = "left ear";
        } else if (
          this.posicionX > 360 &&
          this.posicionX < 400 &&
          this.posicionY > 103 &&
          this.posicionY < 142
        ) {
          parte = "right ear";
        } else if (
          this.posicionX > 219 &&
          this.posicionX < 262 &&
          this.posicionY > 228 &&
          this.posicionY < 341
        ) {
          parte = "left wing";
        } else if (
          this.posicionX > 446 &&
          this.posicionX < 557 &&
          this.posicionY > 231 &&
          this.posicionY < 339
        ) {
          parte = "right wing";
        } else if (
          this.posicionX > 397 &&
          this.posicionX < 439 &&
          this.posicionY > 384 &&
          this.posicionY < 456
        ) {
          parte = "right leg";
        } else if (
          this.posicionX > 255 &&
          this.posicionX < 306 &&
          this.posicionY > 375 &&
          this.posicionY < 448
        ) {
          parte = "left leg";
        } else if (
          this.posicionX > 267 &&
          this.posicionX < 317 &&
          this.posicionY > 296 &&
          this.posicionY < 341
        ) {
          parte = "left arm";
        } else if (
          this.posicionX > 387 &&
          this.posicionX < 438 &&
          this.posicionY > 304 &&
          this.posicionY < 352
        ) {
          parte = "right arm";
        } else if (
          this.posicionX > 304 &&
          this.posicionX < 381 &&
          this.posicionY > 244 &&
          this.posicionY < 270
        ) {
          parte = "mouth";
        } else if (
          this.posicionX > 319 &&
          this.posicionX < 381 &&
          this.posicionY > 290 &&
          this.posicionY < 348
        ) {
          parte = "chest";
        } else if (
          this.posicionX > 302 &&
          this.posicionX < 398 &&
          this.posicionY > 351 &&
          this.posicionY < 450
        ) {
          parte = "stomach";
        } else if (
          this.posicionX > 501 &&
          this.posicionX < 519 &&
          this.posicionY > 341 &&
          this.posicionY < 389
        ) {
          parte = "fire";
        } else if (
          this.posicionX > 291 &&
          this.posicionX < 411 &&
          this.posicionY > 133 &&
          this.posicionY < 192
        ) {
          parte = "forehead";
        } else if (
          this.posicionX > 427 &&
          this.posicionX < 509 &&
          this.posicionY > 395 &&
          this.posicionY < 440
        ) {
          parte = "tail";
        } else {
          parte = "";
        }
        break;

      case "2":
        if (
          this.posicionX > 351 &&
          this.posicionX < 365 &&
          this.posicionY > 198 &&
          this.posicionY < 210
        ) {
          parte = "ojito derecho";
        } else if (
          this.posicionX > 271 &&
          this.posicionX < 279 &&
          this.posicionY > 200 &&
          this.posicionY < 212
        ) {
          parte = "ojito izquierdo";
        } else if (
          this.posicionX > 286 &&
          this.posicionX < 315 &&
          this.posicionY > 104 &&
          this.posicionY < 137
        ) {
          parte = "orejita izquierda";
        } else if (
          this.posicionX > 360 &&
          this.posicionX < 400 &&
          this.posicionY > 103 &&
          this.posicionY < 142
        ) {
          parte = "orejita derecha";
        } else if (
          this.posicionX > 219 &&
          this.posicionX < 262 &&
          this.posicionY > 228 &&
          this.posicionY < 341
        ) {
          parte = "alita izquierda";
        } else if (
          this.posicionX > 446 &&
          this.posicionX < 557 &&
          this.posicionY > 231 &&
          this.posicionY < 339
        ) {
          parte = "alita derecha";
        } else if (
          this.posicionX > 397 &&
          this.posicionX < 439 &&
          this.posicionY > 384 &&
          this.posicionY < 456
        ) {
          parte = "piernita derecha";
        } else if (
          this.posicionX > 255 &&
          this.posicionX < 306 &&
          this.posicionY > 375 &&
          this.posicionY < 448
        ) {
          parte = "piernita izquierda";
        } else if (
          this.posicionX > 267 &&
          this.posicionX < 317 &&
          this.posicionY > 296 &&
          this.posicionY < 341
        ) {
          parte = "bracito izquierdo";
        } else if (
          this.posicionX > 387 &&
          this.posicionX < 438 &&
          this.posicionY > 304 &&
          this.posicionY < 352
        ) {
          parte = "bracito derecho";
        } else if (
          this.posicionX > 304 &&
          this.posicionX < 381 &&
          this.posicionY > 244 &&
          this.posicionY < 270
        ) {
          parte = "boquita";
        } else if (
          this.posicionX > 319 &&
          this.posicionX < 381 &&
          this.posicionY > 290 &&
          this.posicionY < 348
        ) {
          parte = "pechito";
        } else if (
          this.posicionX > 302 &&
          this.posicionX < 398 &&
          this.posicionY > 351 &&
          this.posicionY < 450
        ) {
          parte = "pancita";
        } else if (
          this.posicionX > 501 &&
          this.posicionX < 519 &&
          this.posicionY > 341 &&
          this.posicionY < 389
        ) {
          parte = "flamita";
        } else if (
          this.posicionX > 291 &&
          this.posicionX < 411 &&
          this.posicionY > 133 &&
          this.posicionY < 192
        ) {
          parte = "frentita";
        } else if (
          this.posicionX > 446 &&
          this.posicionX < 528 &&
          this.posicionY > 404 &&
          this.posicionY < 440
        ) {
          parte = "colita";
        } else {
          parte = "";
        }
        break;
    }
    parteCuerpo.innerText = `${parte}`;
  }
}
