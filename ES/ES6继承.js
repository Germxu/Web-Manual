class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    static hello = () => {
        console.log('Hello');

    }
}
let a = new Person("算法", 21)
console.log(a.hello());
