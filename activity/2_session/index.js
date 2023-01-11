// Ejercicio 1
console.log("*******************")
console.log("Ejercicio 1");
console.log("Escribe un programa que tome como entrada un objeto y devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array")

let person = {
  name: "German",
  last: "Angarita",
  email: "germanadolfoangarita@gmail.com",
  profession: "Ingeniero Industrial",
  city: "Bogotá D.C.",
  country: "Colombia"
}

const getKeysObject = ( object ) => {

  const keys = Object.keys(object);

  return keys
}

console.log( getKeysObject( person ))
// Ejercicio 2
console.log("*******************")
console.log("Ejercicio 2");
// console.log("this", this )
// Ejercicio 3
console.log("*******************")
console.log("Ejercicio 3");
class InvertirCadena {
  constructor( cadenaInvertir="Escriba la cadena que desea invertir.") {
    this.cadenaInvertir = cadenaInvertir;
  }

  invertir = () => {
    const arrayString = this.cadenaInvertir.split("");
    const arrayInvertido = arrayString.reverse();
    const unirEnString = arrayInvertido.join("");
    console.log("Cadena Inicial: ",this.cadenaInvertir);
    console.log("Cadena Invertida: ",unirEnString)
    return unirEnString
  }
  
}

console.log("Sin declarar candeaInvertir");
console.log("Para que no se rompa en este caso se agregó un valor por defecto en el constructor. Para que en ningún caso esté vacio.");
const invertirCadenaVacia = new InvertirCadena();
invertirCadenaVacia.invertir();

console.log("Declarando con Hola Mundo!");
const invertirCadena = new InvertirCadena("¡Hola Mundo!");
invertirCadena.invertir();

console.log("Intentar acceder al método: invertirCadena.nuevoMetodo()");

try {
  invertirCadena.nuevoMetodo()
} catch (error) {
  console.log("1. Manejar el error a través de un tyc");
  console.log("2. Utilizar el tipado para que no se pueda accedar a métodos que no existen.");
}
// Ejercicio 4
console.log("*******************")
console.log("Ejercicio 4");
console.log("Crea una clase con el formato ES6. Esta clase va a tener dos atributos, username y password y un método login() que compruebe que username tiene el valor admin y password el valor passwd y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas.");

class Login {
  constructor( usarname, password) {
    this.username = usarname;
    this.password = password;
  }

  login = () => {
    const usarname = "admin";
    const password = "passwd";

    if (this.username == usarname && this.password == password) {
      alert("User logged in")
    } else {
      alert("User or passwd incorrect")
    }
  }
}

console.log("Login exitoso.");
const login =  new Login("admin", "passwd");
// login.login();

console.log("Login Bad.");
const loginBad =  new Login("superAdmin", "passwd");
// loginBad.login();
// Ejercicio 5
console.log("En este ejercicio os voy a hacer mirar un poco de documentación extra. Y vamos a utilizar el fichero que se encuentra en activity/2_session/index.html")

const element = document.getElementById("loginSuccess");
element.addEventListener('click', ( event )=> {
  const login =  new Login("admin", "passwd");
  login.login();
})

const element2 = document.getElementById("loginFailure");
element2.addEventListener("click", () => {
  const login =  new Login("Peter", "peter123");
  login.login();
})
// Ejercicio 6
console.log("*******************");
console.log("Ejercicio 6");
console.log("En este ejercicio vamos a añadir asincronía al resto de botones:");

const element3 = document.getElementById("loginSuccessAsync")
.addEventListener("click", async () => {
  try {
    const result = await loginWitUsername("admin", "passwd");
    alert( result )
  } catch (error) {
    alert( error )
  }
  
})

document.getElementById("loginFailureAsync")
.addEventListener("click", async ()=> {
  try {
    const result = await loginWitUsername("Pepe", "pepe11200");
    alert( result )
  } catch (error) {
    alert( error )
  }
})

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
