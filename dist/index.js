"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "kimgeuntae",
    age: 22,
    gender: "male"
};
const sayHi = (person) => {
    return `hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map