const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

test('create an Intern object', () =>{
    const intern = new Intern();
    expect(intern.school).toEqual(expect.any(String));

})