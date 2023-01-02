
// Ejercicio 1
console.log('Importar archivo aboutme')
// import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log("*******************")
console.log("Ejercicio 2");
console.log("¿Qué se ejecuta antes, la llamada a console.log() o el contenido del fichero aboutme.js?")
console.log("Se ejecuta primero el contenido del fichero aboutme.js")
console.log("¿Por qué?")
console.log("Por las características a la hora de ejecutar el código, JavaScript se ejecuta de forma mono hilo, no bloqueante y asíncrono.")
console.log("*******************")

// Ejercicio 3
console.log("*******************")
console.log("Ejercicio 3");
console.log("Enumera 3 herramientas útiles dentro de las herramientas de desarrollo de Google Chrome o Mozila Firefox (inspector, consola, networking…) y explica su funcionamiento.")
console.log("1. Consola")
console.log("La consola tiene varias funcionalidades una de ellas es permitir ver los mensajes registrados, estos mensajes deben ser registrados con la expresión console.log(\"mensaje\") dentro del javascript, cuando el navegador ejecute el proceso este mostrará el mensaje registrado en la herramienta Console.")

console.log("2. Source")
console.log("Esta herramienta permite ver los archivos que se han cargado en la página.")
console.log("De forma adicional permite editar los archivos CSS y javascript, sin embargo si actualiza el navegador perderá los cambios.")
console.log("También puede crear, guardar y ejecutar fragmentos de javascript")
console.log("También es una herramienta mucho mejor que los console.log() para depurar el código, ya que Source permite señalar puntos de interrupción intencionalmente y luego correr el código una línea a la vez.")

console.log("3. Network")
console.log("Esta herramienta permite asegurarnos que los recursos se cargar o descargan de acuerdo a lo que necesitamos o esperamos.")
console.log("También permite inspeccionar las propiedades de un recurso de forma individual, encabezados, HTTP, contenidos, tamaño etc.")
console.log("*******************")

// Ejercicio 4
console.log("*******************")
console.log("Ejercicio 4");
console.log("Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7.")

let initNumber = 1;
let endNumber = 100;

for( let i = initNumber; i <= endNumber; i++) {
    if ( i % 7 === 0) {
        console.log("Número: ", i );
    }
    
}
console.log("*******************")
// Ejercicio 5
console.log("*******************")
console.log("Ejercicio 5");
console.log("Cuales son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?. Busca documentación para enumerar los principales comportamientos de ambas.")

console.log("La etiqueta <script> se utiliza para insertar o hacer referencia a un script ejecutable dentro del documento HTML o XHTML")
console.log("Cuando el atributo type está seteado en module, el código es tratado como un módulo de javascript")

console.log("En general hay 2 diferencias:")
console.log("1. Los módulos ES6 son automáticamente código de modo estricto, incluso si no los escribe \"use strict\";")
console.log("2. Puede utilizar import y export en módulos")

console.log("Ref 1. https://developer.mozilla.org/es/docs/Web/SVG/Element/script")
console.log("Ref 2. https://lenguajehtml.com/html/scripting/etiquetas-html-scripts/")
console.log("*******************")
// Ejercicio 6

console.log("*******************")
console.log("Ejercicio 6");

function Formatter ( ) {
    this.prefix = "Hello ";
    this.data = ""
    this.append = function( data ) {
        this.data = data;
        console.log( this.prefix + data )
    }
}

Formatter.prototype.toLowerString = function( data ){
    this.lowerCase = this.prefix + data
    console.log(this.lowerCase.toLocaleLowerCase());
}
var formatter = new Formatter()
formatter.append("World");
formatter.toLowerString("I'm German!");
console.log("*******************")

