const Manager = require('../lib/Manager');
//creates a manager object
test('create an Manager object', () =>{
    const manager = new Manager('Tracy', 100, 'wetr9902@gmail.com', 322);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
//gets from getRole
test('gets role',() =>{
    const manager = new Manager('Tracy', 100, 'wetr9902@gmail.com', 322);

    expect(manager.getRole()).toEqual('Manager');
})