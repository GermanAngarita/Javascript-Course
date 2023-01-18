"use strict";
exports.__esModule = true;
exports.getValuePerson = void 0;
// Ejercicio 1
console.log("\n--");
console.log("Ejecricio 1");
var getValuePerson = function (person) {
    var keys = Object.keys(person);
    var valores = [];
    keys.map(function (key) {
        valores.push(person[key]);
    });
    return valores;
};
exports.getValuePerson = getValuePerson;
var persona1 = {
    name: "German",
    age: 35,
    profession: "Ingeniero Industrial | FullStack Developer"
};
console.log("getValuePerson: ", (0, exports.getValuePerson)(persona1));
// Ejercicio 2
console.log("\n--");
console.log("Ejecricio 2");
var sumOrConcatenate = function (a, b) {
    if (typeof (a) == 'number' && typeof (b) == 'number') {
        console.log("sumOrConcatenate: Sum      " + a + "+ " + b + " = ", a + b);
    }
    if (typeof (a) == 'string' && typeof (b) == 'string') {
        console.log("sumOrConcatenate: Concat   " + a + ", " + b + " = ", a + "-" + b);
    }
    if (typeof (a) != typeof (b)) {
        console.log("sumOrConcatenate: Concat + " + a + ", " + b + " = ", a + "+" + b);
    }
};
// Parámetro a: number y b: number
sumOrConcatenate(12, 18);
// Parámetro a: string y b: string
sumOrConcatenate('12', '90');
// Parámetro a: string|number o b: string|number
sumOrConcatenate('12', 23);
sumOrConcatenate(12, '23');
// Ejercicio 3
console.log("\n--");
console.log("Ejecricio 3");
var car = {
    tires: 4,
    turnOnEngine: function () {
        console.log("turnOnEngine is exe");
    },
    pressPedal: function () {
        console.log("pressPedal is exe");
    }
};
var motorcycle = {
    tires: 2,
    turnOnEngine: function () {
        console.log("turnOnEngine is exe");
    },
    openThrottle: function () {
        console.log("turnOnEngine is exe");
    }
};
//type Predicates
var isCar = function (vehiculo) {
    return vehiculo.pressPedal !== undefined;
};
var miVehiculo = function (vehiculo) {
    if (isCar(vehiculo)) {
        vehiculo.pressPedal();
    }
    else {
        vehiculo.openThrottle();
    }
};
console.log("miVehiculo con Car: ");
miVehiculo(car);
console.log("miVehiculo con Motorcycle: ");
miVehiculo(motorcycle);
// Ejercicio 4
console.log("\n--");
console.log("Ejecricio 4");
var functionGenerica = function (datos) {
    console.log("Array Entrada: ", datos);
    datos.shift();
    console.log("Array Salida: ", datos);
    return datos;
};
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
console.log("\nfunctionGenerica(strArray)        =>    ", functionGenerica(strArray));
console.log("\nfunctionGenerica(numArray)        =>    ", functionGenerica(numArray));
console.log("\nfunctionGenerica(mixedArray)      =>    ", functionGenerica(mixedArray));
console.log("\nfunctionGenerica(unsupportedArray)=>    ", functionGenerica(unsupportedArray));
