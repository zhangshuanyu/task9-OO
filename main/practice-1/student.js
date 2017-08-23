const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,clazz){
        super(name,age);
        this.clazz = clazz;
    }

    introduce(){
        return this.localIntroduce() + ` I am a Student. I am at Class ${this.clazz}.`;
    }

}