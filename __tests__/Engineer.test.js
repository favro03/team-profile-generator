const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

//test to create a
test('create an Engineer object',() =>{
    const engineer = new Engineer();
    expect(engineer.gitHub).toEqual(expect.any(String));
});

