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