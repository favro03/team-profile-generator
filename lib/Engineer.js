const Engineer = require('../lib/Engineer');
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(userName){
        super(userName);
        this.userName = userName;
    }
}

module.exports = Engineer;