"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
/*
interface Human {
    name: string,
    age: number,
    gender: string
}   // Interface is not include in compiled JS code.

const person = {
    name: "kimgeuntae",
    age: 22,
    gender: "male"
}
*/
const kim = new Human("Tay", 21, "male");
const sayHi = (person) => {
    return `hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(kim));
//# sourceMappingURL=index.js.map