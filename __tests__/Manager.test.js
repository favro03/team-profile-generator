const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

test('create an Manager object', () =>{
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(String));
});