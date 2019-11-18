interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "kimgeuntae",
    age: 22,
    gender: "male"
}

const sayHi = (person: Human): string=> {
    return `hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(person));

export {};
