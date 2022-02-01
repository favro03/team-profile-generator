const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

test('create an Engineer object',() =>{
    const engineer = new Engineer();
    expect(engineer.userName).toEqual(expect.any(String));
});