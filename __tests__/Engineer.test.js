const Engineer = require('../lib/Engineer');

//test to create an engineer object
test('create an Engineer object',() =>{
    const engineer = new Engineer('Tracy', 100, 'wetr9902@gmail.com','favro03');
    expect(engineer.gitHub).toEqual(expect.any(String));
});
//gets github user name
test('gets githHub user name',() =>{
    const engineer = new Engineer('Tracy', 100, 'wetr9902@gmail.com','favro03');
    expect(engineer.getGethub()).toEqual(expect.any(String));
})
//gets role form getRole()
test('get role info',() =>{
    const engineer = new Engineer('Tracy', 100, 'wetr9902@gmail.com','favro03');
    expect(engineer.getRole()).toEqual('Engineer');
})


