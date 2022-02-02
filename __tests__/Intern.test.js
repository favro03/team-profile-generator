const Intern = require('../lib/Intern');
//creates an intern object
test('create an Intern object', () =>{
    const intern = new Intern('Tracy', 100, 'wetr9902@gmail.com','MSU');
    expect(intern.school).toEqual(expect.any(String));
})
//gets school from getSchool()
test('get school',() => {
    const intern = new Intern('Tracy', 100, 'wetr9902@gmail.com','MSU');
    expect(intern.getSchool()).toEqual(expect.any(String));
})

//gets role from getRole()
test('gets role',() =>{
    const intern = new Intern('Tracy', 100, 'wetr9902@gmail.com','MSU');
    expect(intern.getRole()).toEqual('Intern');
})