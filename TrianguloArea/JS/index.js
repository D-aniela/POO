"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangulo_class_1 = require("./Triangulo.class");
eventLister();
function eventLister() {
    var _a;
    (_a = document
        .getElementById("btnCalcular")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", CalcularArea);
}
function CalcularArea() {
    var altura = Number(document.getElementById("Altura")
        .value);
    var base = Number(document.getElementById("Base")
        .value);
    var triangulo = new Triangulo_class_1.Triangulo(base, altura);
    console.log(triangulo.area);
}
