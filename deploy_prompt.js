const readline = require("readline");
const rl       = readline.createInterface({input:process.stdin,output:process.stdout});
const cmd      = require( "node-cmd" );

init();

function init() {
    rl.setPrompt("GIT : ");
    rl.prompt();
    rl.on("line",(cmd)=>{
        switch (cmd) {
            case "blog" : blog(); break;
            case "test" : test(); break;
        }
    });
}
function result(result){
    console.log('------------------------------------------------------------\n');
    console.log(result);
    console.log('------------------------------------------------------------\n');
    rl.prompt();
}
function blog() {
    cmd.get(
        `
        cp -r /Users/heon/Documents/GitHub/laerdream-log-dev/_site/ /Users/heon/Documents/GitHub/laerdream.github.io
        cd /Users/heon/Documents/GitHub/laerdream.github.io
        git add *
        git commit -m "Build : ${Date()}"
        git push
        git log -1
        `, function( error, success, stderr ) {
        if( error ) {} else {result(success);}
    });
}
function test() {
    console.log(Date());
}