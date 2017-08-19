const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
        this.notifyObject(clazzes);
    }

    notifyStudentAppended(){};
    notifyLeaderAssigned(){};
    notifyObject(clazzes) {
        clazzes.forEach(clazz => clazz.teacher = this);
    }

    isTeaching(student){
        return this.clazzes.some((clazz) => {
            return clazz.hasStudent(student);
        })
    }

    introduce(){
        if(this.clazzes.length === 0) {
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }else {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.getclazzes()}.`;
        }
    }

    getclazzes() {
        return this.clazzes.reduce((arr, ele) => {
            arr.push(ele.number);
            return arr;
        }, []).join(",");
    }
}