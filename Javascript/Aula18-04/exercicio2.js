const person1 = {
    name: "John",
    age: 30,
    profession: "Engineer"
 };
 
 const person2 = {
    name: "Mary",
    age: 25,
    profession: "Doctor"
 };

 function getInfo(object) {
    return [object.name, object.name.length, object.age, object.profession, object.profession.length];
}

const infoPerson1 = getInfo(person1);
const infoPerson2 = getInfo(person2);

console.log(infoPerson1);
console.log(infoPerson2);
