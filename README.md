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

