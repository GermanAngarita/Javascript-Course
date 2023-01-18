// Ejercicio 1
console.log("\n--")
console.log("Ejecricio 1")
interface Person {
    name: string;
    age: number;
    profession: string;
}

const getValuePerson = ( person: Person ): Array<string|number> => {
    const keys = Object.keys( person );
    let valores: Array<string|number> = []
    keys.map( ( key: string ) => {
        valores.push(
            person[key]
        )
    } );

    return valores;
}


const persona1:Person = {
    name: "German",
    age: 35,
    profession: "Ingeniero Industrial | FullStack Developer"
}

console.log("getValuePerson: ", getValuePerson(persona1))
// Ejercicio 2
console.log("\n--")
console.log("Ejecricio 2")

const sumOrConcatenate = ( a: string | number, b: string | number ) => {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        console.log(`sumOrConcatenate: Sum      ${a}+ ${b} = `, a + b )
    }
    if (typeof(a) == 'string' && typeof(b) == 'string'){
        console.log(`sumOrConcatenate: Concat   ${a}, ${b} = `, `${a}-${b}` )
    }
    if (typeof(a) != typeof(b)) {
        console.log(`sumOrConcatenate: Concat + ${a}, ${b} = `, `${a}+${b}` )
    }
}
// Parámetro a: number y b: number
sumOrConcatenate(12, 18);
// Parámetro a: string y b: string
sumOrConcatenate('12', '90');
// Parámetro a: string|number o b: string|number
sumOrConcatenate('12', 23);
sumOrConcatenate(12, '23');


// Ejercicio 3
console.log("\n--")
console.log("Ejecricio 3")

interface Car {
    tires: number;
    turnOnEngine: () => void;
    pressPedal: ()=> void;
}
interface Motorcycle {
    tires: number;
    turnOnEngine: () => void;
    openThrottle: ()=> void;
}

const car: Car = {
    tires: 4,
    turnOnEngine: function (): void {
        console.log("turnOnEngine is exe");
    },
    pressPedal: function (): void {
        console.log("pressPedal is exe");
    }
}

const motorcycle: Motorcycle = {
    tires: 2,
    turnOnEngine: function (): void {
        console.log("turnOnEngine is exe");
    },
    openThrottle: function (): void {
        console.log("turnOnEngine is exe");
    }
}
//type Predicates
const isCar = ( vehiculo: Car | Motorcycle): vehiculo is Car => {
    return (vehiculo as Car).pressPedal !== undefined;
}
const miVehiculo = ( vehiculo: Car | Motorcycle ) => {

    if (isCar(vehiculo)) {
        vehiculo.pressPedal();
    } else {
        vehiculo.openThrottle();
    }
}

console.log("miVehiculo con Car: ");
miVehiculo(car);
console.log("miVehiculo con Motorcycle: ");
miVehiculo(motorcycle);
// Ejercicio 4
console.log("\n--")
console.log("Ejecricio 4")
const functionGenerica = <T>( datos: Array<T>) => {

    console.log("Array Entrada: ", datos)
    datos.shift();
    console.log("Array Salida: ", datos)
    return datos
}
const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];

console.log("\nfunctionGenerica(strArray)        =>    ", functionGenerica<string>(strArray))
console.log("\nfunctionGenerica(numArray)        =>    ", functionGenerica<number>(numArray))
console.log("\nfunctionGenerica(mixedArray)      =>    ", functionGenerica<number|string>(mixedArray))
console.log("\nfunctionGenerica(unsupportedArray)=>    ", functionGenerica<Object|number|string>(unsupportedArray))
