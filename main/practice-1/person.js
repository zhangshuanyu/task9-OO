// Write your code here
module.exports = class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return this.localIntroduce();
    }

    localIntroduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}