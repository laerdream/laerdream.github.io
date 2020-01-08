const cmd      = require( "node-cmd" );

blog();

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
function result(result){
    console.log('------------------------------------------------------------\n');
    console.log(result);
    console.log('------------------------------------------------------------\n');
}