# ECMAScript 6+
ECMAScript es la especificación del lenguaje JavaScript propuesto por ECMA Internacional, que es la institución encargada de los estándares, y JavaScript, es el lenguaje de programación que utiliza las especificaciones propuestas, que van siendo añadidas cada año a partir del 2015, cuando fue lanzado ES6.

### Caracteristicas del ECMAScript 6
* Parametros por defecto: podemos establecer ciertos valores que pasamos a una función por defecto.

### Antes
```js
function newFunciton(name, age, country){
    var name = name || "Lalo";
    var age = age || 32;
    var country = country || "EC";
    console.log(name, age, country);
}


```
### Despues
```js
function newFunction2(name = "Lalo", age = 32, country = "EC") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Alan", 15, "CO");
```

* Templates literals: Permite realizar más fácil la concatenación

### Antes
```js
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);
```
### Despues
```js
let hello = "Hello";
let world = "World";
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);
```
Para realizar esta concatenación es necesario de las comillas especiales **``**

* Multilinea
### Antes
```js
let lorem = "Tu epifania onirica me recordo, \n"
+  "que mi limerencia por ti es imarcecible.";
```
### Despues
```js
let lorem2 = `Tu epifania onirica me recordo, parte1
que mi limerencia por ti es imarcecible. parte2
`;
```
* Reestructuración de elementos: Seleccionar que parte de un objeto deseo seleccionar
### Antes
```js
let person = {
    'name': "Lalo",
    'age': 25,
    'country': "EC",
};

console.log(person.name, person.age);
```
### Despues
```js
let person = {
    'name': "Lalo",
    'age': 25,
    'country': "EC",
};
//Le digo que valores deseo que salga
let {name, country} = person;
console.log(name, country);
```
* Spread Operator: operador de propagacion, nos permite expandir de ciertas situaciones varios elementos

```js
let team1 = ["Lalo", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Kamila"];
```
### Antes
```js
let education = ['David', "Lalo", "Julian", "Ricardo", "Valeria", "Yesica", "Kamila"];
```
### Despues
```js
let education = ['David', ...team1, ...team2];
```
* Let y const: antes unicamente se contaba con `var` como tipo de variable para declarar, pero en ES6 tenemos tres tipos de variables `var`, `let` y `const`
    * **``var``**: Era la forma en que se declaraban las variables hasta ECMAScript5. Ya no se usa tanto pues es de forma global y sus caracteristicas son:
        * Se puede reiniciar: si la variable se inicializa var nombre = 'Eduardo' y reinicializamos la misma variable con diferente valor var nombre = Atreus el último valor predomina.
        * Se puede reasignar: la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: var nombre = 'Eduardo' ahora la reasignamos nombre = 'Atreus' ya no va var
        * Su alcance es función global: inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR. const y let es la forma en que se declaran las variables a partir de ECMAScript 6.
    * **``const``**: sirve para declarar variables que nunca van a ser modificadas, sus caracteristicas son:
        * **No se puede reinicilizar**: es una const única no puede haber otra inicializada con el mismo nombre.
        * **No es inmutable**: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre.
    * **``let``**: Son variables que pueden ser modificadas, se pueden cambiar.
        * **No se puede reinicilizar**: es una const única no puede haber otra inicializada con el mismo nombre.
        * **Se puede reasignar**: la variable ya inicializada le reasignamos otro valor.
        * **Su contexto de es bloque**: Solo funciona dentro de un bloque ```{}```, fuera de ello no.

* Propiedad de objetos mejorada
### Antes
```js
let name ="Lalo";
let age = 25;

obj = {name: name, age: age};
```
### Despues
```js
let name ="Lalo";
let age = 25;

obj2 = {name, age}
```
* arrow functions
### Antes
```js
let listOfName = names.map(function(item){
    console.log(item.name);
});
```
### Despues
```js
let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {
    //...
};

const listOfName4 = names => {
    //...
};
const square = num => num*num;
```
Una de las caracteristicas del **arrow function** es que no tienen un ``this`` vinculado, es decir, que el ``this`` pasa a ser el del contexto que contiene a la **arrow function**. Lo mismo para el objeto arguments, que no es tan común como el ``this``, sería un objeto con los argumentos del contexto superior. Esto aclara algunos problemas que hayan podido tener al hacer uso del ``this`` y **arrow functions**, el cuál fue mi caso en una oportunidad.
* Promesas: algo va a pasar, como eventos

    * composicion - ``newPromise()``
        * ``resolve()`` - comportamiento al cumplir la promesa
        * ``reject()`` - comportamiento al fallar la promesa
        * ``.then (⇒)`` - obtener el valor del resolve
        * ``.error(⇒)`` - obtener el valor del reject()

```js
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Todo bien");
        } else {
            reject("Sorry");
        }
    });
}

helloPromise()
    .then(Response => console.log(Response))
    .then(() => console.log("hola mundo"))
    .catch(error => console.log(error))
```
* Clases
```js
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));
```
* Modulos
### export default
Con export default podemos exportar una variable, o función por defecto de un archivo así:

`./module.js`
```js
functionhello() {
	return'Hello!'
}

export default hello
```
Para importarla no necesitamos hacerlo con su nombre, podemos usar cualquier nombre y por defecto nos traerá la única variable o función que exportó así:
`./index.js`
```js
import myHello from'./module.js'

console.log(myHello())
```
> al tener `export default`, cuando lo llamemos en el `import` no es necesario que este entre `{}` 
### export nombrado
A diferencia del export default en esta ocasión podemos exportar más de una variable o función que se encuentre en nuestro archivo, pero para importarlas debemos hacerlo con el nombre exacto de esa variable entre llaves.

Para exportar lo hacemos así:
```js
export function hello() {
	return'Hello!'
}

export const bye = 'Bye!'
```
Podemos importar solo lo que necesitemos así:
```js
import {Hello} from'./module.js'

console.log(Hello())
```
También podemos importar más de un elemento nombrando cada uno
```js
import {hello, bye} from'./module'

console.log(hello())
console.log(bye)
```
Podemos cambiarles los nombres
```js
import { hello, bye as byeGreeting } from'./module'

console.log(hello())
console.log(byeGreeting)
```
Y podemos importar todas las funciones de una sola vez
```js
import * as allGreetings from'./module'

console.log(allGreetings.hello())
console.log(allGreetings.bye)
```
### Anterior sintaxis
Cuando no nos funcione esta sintaxis porque no la tengamos soportada podemos usar la anterior

Para exportar lo hacemos así:
```js
functionhello() {
	return'Hello!'
}

module.exports = hello
```
Para importar así:
```js
const hello = require('./module')

console.log(hello())
```
Con la sintaxis antigua también podemos exportar más de una variable o función pasándolas como un objeto.

* generator
```js
function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if (true){
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
```
# ECMAScript 7
Las implementaciones son:

## El método include()

[documentacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
```js
let number  = [1,2,3,7,8,9];

if(number.includes(7)){
    console.log("Si se encuentra el valor 7")
} else {
    console.log("no se encuentra")
}
```

## Asignación de exponenciación

### Antes
```js
// Math.pow(base, exponente)
console.log(Math.pow(2, 4)); // 16
```
### Despues
```js
// hoy en día
console.log(2 ** 4); // 16
```

# ECMAScript 8
Las implementaciones son:
## Object entries
Transforma un objeto en una lista de arrays
```js
const data = {
    frontend: 'Lalo',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
// [
//   [ 'frontend', 'Lalo' ],
//   [ 'backend', 'Isabel' ],
//   [ 'design', 'Ana' ]
// ]
```
Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
```js
console.log(entries.length);
// 3
```
## Object values
Me devuelve los valores de un objeto a un arreglo. 
```js
const values = Object.values(data);
console.log(values);

// [ 'Lalo', 'Isabel', 'Ana' ]
```
Si queremos saber cuantos valores posee nuestro arreglo ahora es posible con length

```js
console.log(entries.length);
// 3
```
## Padding
Nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.

```js
const string = "hello";
// se añade al inicio la palabra 'hi'
console.log(string.padStart(7,'hi'));
// Se añade al final la palabra 'hi'
console.log(string.padEnd(12,'hi'));
```
## Trailing comas
dejar una coma en el último elemento de un objeto, para evitar futuros errores si quieres agregar nuevos elementos al objeto.
```js
const data= {
    front:'Alej',
    back: 'Rel', // <--- Esa coma es la diferencia.
}
```
> [Lectura obligatoria](https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/)
## Async 
Nos sirve para "marcar" una función como asincrona y su valor de retorno es una promesa.
## Await
Solo es aplicable a las funciones marcadas con **asyc**, pone en espera la ejecución de la función mientras la promesa se resuelve, abriendo paso a la ejecución de otras funciones.

# ECMAScript 9

## object Rest/Spread Operator
Básicamente viene a ser lo mismo que se puede hacer con los parámetros de las funciones y los arrays desde ES6, pero con propiedades de los objetos.
```js
const obj = {
  name: 'Lalo',
  age: 25,
  country: 'EC'
};

// Rest
const {name, age, ...rest} = obj;
console.log(name, age, rest); // Lalo 25 { country: 'EC', address: 'Address...' }

// Spread
const newObj = {name, job: 'Developer', ...rest};
console.log(newObj);

const copyObj = { ...newObj };
console.log(copyObj, newObj);
```
## Promise.finally()
Ahora tendríamos tres posibles funciones callback para las promesas que serían `.then()`, `.catch()`, y `.finally()` puede ser de utilidad si quieres hacer algún proceso o limpieza una vez que la promesa termina, sin importar su resultado.

```js
const sayHi =() =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeOut(()=>resolve("Hi, how are you"), 3000)
            : reject(new Error("Oh! man"))
    });
};
sayHi
    .then(response=> console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log("Finalizo la promesa"))
```
## Mejoras en el manejo de RegExp
#### Capturar por grupos (named capture groups)
Actualmente podemos capturar una regexp (expresion regular) en grupos y el resultado es un array por ejemplosi queremos capturar un número separado por espacios
### Antes
```js
const pattern = /(\d{3}).(\d{3}).(\d{4})/u;

const number = pattern.exec("320 123 2312");

console.log(number)// ["320 123 2312", "320", "123", "2312"]
```
Esto es bastante util pero no lo sugicientemente claro o legible, por eso en ES2018 podemos identificarlos con un nombre a cada grupo por ejemplo `(?<numero>\d)`
```js
const pattern = /(?<indicator>\d{3}).(?<first>\d{3})(?<second>\d{4})/u;

const number = pattern.exec('320 301 1239');

console.log(number.groups) //{indicator: '320', first: '301', second: '1239'}
```
Ahora vamos a tener un objeto donde los keys van a ser iguales a los nombres que le asignemos a los grupos

tambien puedes usar destructuring
```js
const {groups: {indicator, first, second}} = pattern.exec('320','301','1239');
```

# ECMAScript 10
* ``Array.prototype.flat(nivel_de_profundidad)``: un nuevo método que nos permite aplanar arreglos.
```js
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))
```
* ``Array.prototype.flatMap()`` lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
```js
let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value=>[value, value*2]))
```
* ``String.prototype.trimStart()`` | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
```js
let hello = "      hello world"

console.log(hello)
console.log(hello.trimStart())

let hello = "hello world           ";
console.log(hello)
console.log(hello.trimEnd())
```
* ``try/catch``: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
```js
try {
    
} catch {
    error
}
```
* ``Object.fromEntries()`` lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
```js
let entries = [["name", "Lalo"], ["age", 32]];

console.log(Object.fromEntries(entries));
```
* ``Symbol.prototype.description``: permite regresar el descripcion opcional del Symbol
```js
let mySymbl = "My Symbol";
let symbol = Symbol(mySymbl);
console.log(symbol.description)
```

# TC39
Es un grupo de desarrolladores e implementadores que estan a cargo de revisar cada una de las propuestas de JS y que cumplan con el estandar, para llevarlas a la siguiente version de JS.
