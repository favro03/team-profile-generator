
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
        console.log(teamArr);
        addEmployee();
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
            message: 'Please add an Engineer or Intern?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees Name?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID?',
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please enter the Employees ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees Email?',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please enter the Employees email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the Engineers GitHub user name?',
            when: (input) => input.role === "Engineer",
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
            name: 'school',
            message: 'What is the Interns school?',
            when: (input) => input.role === "Intern",
            validate: gitInput => {
                if (gitInput){
                    return true;
                } else {
                    console.log('Please enter the Interns school!');
                    return false;
                }
            }
        },
    ])
    .then(employeeInfo => {
    
        let {name, role, id, email, gitHub, school} = employeeInfo;
        let employee;
        if(role === "Engineer"){
            employee = new Engineer (name, id, email, gitHub);
            teamArr.push(employee);
            console.log(teamArr);
            
        }
        else if(role === "Intern"){
            employee = new Intern (name, id, email, school);
            teamArr.push(employee);
            console.log(teamArr);  
        }
        addNew();
    })
};
const addNew = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name:'add',
            message: 'Do you want to add anymore Employes?',
            choices: ['Add More', 'Done'],
        },
    ])
    .then(addNewInfo => {
    
        let {add} = addNewInfo;
        
        if(add === "Add More"){
            addEmployee()
        }      
    });
};
   
addManager();





        