class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`My name is ${this.name}, and I am ${this.age} years old.`)
    }
}

const person1 = new Person('Sankar', 29)
person1.sayHello()
