//const Employee = require('./Employee');

function Engineer(gitHub){
    this.gitHub = gitHub;
    
};
Engineer.prototype.getGithub = function(){
    return this.gitHub;
}
module.exports = Engineer;
