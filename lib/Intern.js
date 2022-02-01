const Intern = require('../lib/Intern');
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        super(school);
        this.school = school;
    }
}

module.exports = Intern;