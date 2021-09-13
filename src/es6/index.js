function newFunciton(name, age, country){
    var name = name || "Lalo";
    var age = age || 25;
    var country = country || "EC";
    console.log(name, age, country);
}

// es6
function newFunction2(name = "Lalo", age = 25, country = "EC") {
    console.log(name, age, country);
}
newFunction2("Alan", 15, "CO");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

let lorem = "Tu epifania onirica me recordo, parte1 \n"
+  "que mi limerencia por ti es imarcecible. parte2";
let lorem2 = `Tu epifania onirica me recordo, parte1
que mi limerencia por ti es imarcecible. parte2
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': "Lalo",
    'age': 25,
    'country': "EC",
};

console.log(person.name, person.age, person.country);

//es6
let {name, age} = person;
console.log(name, age);

let team1 = ["Lalo", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Kamila"];

let education = ['David', ...team1, ...team2];

console.log(education);

let team1 = ['oscar', 'andres', 'ricardo']
let team2 = ['andres', 'yesica', 'camila']
//array duplicados
let education = ['Carolina', ...team1, ...team2]
 // arrays sin duplicados
let education2 = [...new Set(['Carolina', ...team1, ...team2])]

let name ="Lalo";
let age = 25;

obj = {name: name, age: age};
obj2 = {name, age};

console.log(obj2);

const names = [
    {name: "Lalo", age: 25},
    {name: "Alan", age: 18}
]

let listOfName = names.map(function(item){
    console.log(item.name);
});

let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {
    //...
}

const listOfName4 = names => {
    //...
}
const square = num => num*num;

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


import {hello, bye, chao} from "./module.js";

console.log(hello());
console.log(chao());
console.log(bye);

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

function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3