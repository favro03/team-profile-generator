
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
    });
};
const addEmployee = () =>{
    console.log(`
    ==================== 
     Add a New Employee
    ====================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name:'role',
            message: 'Do you have anymore employees to add?',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers Name?',
            when: ({ role }) =>{
                if(role === "Engineer"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the Engineers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID?',
            when: ({ role }) =>{
                if(role === "Engineer"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please enter the Engineers ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers Email?',
            when: ({ role }) =>{
                if(role === "Engineer"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter the Engineers email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the Engineers GitHub user name?',
            when: ({ role }) =>{
                if(role === "Engineer"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: gitInput => {
                if (gitInput){
                    return true;
                } else {
                    console.log('Please enter the Engineers GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern Name?',
            when: ({ role }) =>{
                if(role === "Intern"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the Interns name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID?',
            when: ({ role }) =>{
                if(role === "Intern"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please enter the Intern ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns Email?',
            when: ({ role }) =>{
                if(role === "Intern"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter the Intern email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns school?',
            when: ({ role }) =>{
                if(role === "Intern"){
                    return true;
                } else{
                    return false;
                }
            },
            validate: gitInput => {
                if (gitInput){
                    return true;
                } else {
                    console.log('Please enter the Interns school!');
                    return false;
                }
            }
        },


    ]);
};
//addManager();
addEmployee();
        