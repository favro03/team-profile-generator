const Employee = require('../lib/Employee');

//creates an employee object
test('create an Employee object',() =>{
    
    const employee = new Employee('Tracy', 100, 'wetr9902@gmail.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets name from getName()
test('gets employee name',() =>{
    const employee = new Employee('Tracy', 100, 'wetr9902@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

//gets id from getId()
test('gets id number',() =>{
    const employee = new Employee('Tracy', 100, 'wetr9902@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})
//gests email from getEmail()
test('gets email address',() =>{
    const employee = new Employee('Tracy', 100, 'wetr9902@gmail.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
})
//gets role from input from getRole()
test('gets role from user input',() =>{
    const employee = new Employee('Tracy', 100, 'wetr9902@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
    
})


