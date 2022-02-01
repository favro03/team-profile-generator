const Manager = require('../lib/Manager');
const Employee = require('./Employee');


class Manager extends Employee{
    constructor(officeNumber){
        super(officeNumber);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;