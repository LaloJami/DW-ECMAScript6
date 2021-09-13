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
# EMACScript 7
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

# EMACScript 8
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
nos permite asignar elementos al objeto mediante comas.
```js
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}
```