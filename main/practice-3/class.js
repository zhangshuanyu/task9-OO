// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader;
        this.member = [];

    }

    assignLeader(student){
        if(this.hasStudent(student)){

            this.leader = student.id;
            return "Assign team leader successfully."
        }else{
            return "It is not one of us.";
        }
    }

    appendMember(student){

        this.member.push(student.id);
    }

    hasStudent(student){
        return this.member.includes(student.id);
    }
};