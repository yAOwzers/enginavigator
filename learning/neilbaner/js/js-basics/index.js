
let person = {
    name: "Neil",
    age: 20
};

console.log(person)

person.name = "Lien";
person['name'] = "eejrenab"; //when you don't know the name of the target property
console.log(person)