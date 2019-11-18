class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
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

const sayHi = (person: Human): string => {
    return `hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(kim));

export { };
