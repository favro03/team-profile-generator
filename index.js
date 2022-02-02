
//access to objects and methods
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArr = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the team mangers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeInput => {
                if (officeInput){
                    return true;
                } else {
                    console.log('Please enter your ofice number!');
                    return false;
                }
            }
        },
        
    ])
    .then(managerData => {
        const{name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager);
        console.log(manager);
    })
};
addManager();
/*{
            type: 'list',
            name:'role',
            message: 'Do you have anymore employees to add?',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
        }*/