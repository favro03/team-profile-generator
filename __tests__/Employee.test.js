const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('create an Employee object',() =>{
    
    const employee = new Employee();
    
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

});
