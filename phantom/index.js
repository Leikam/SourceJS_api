/**
 * Created by dmitrylapynov on 09/08/14.
 *
 * Sourcejs spec parser, using phantomjs
 */


var
    path = require('path'),
    fs = require('fs'),
    ph = require('phantomjs'),
    childProcess = require('child_process'),
    exec = childProcess.exec,

    phPath = ph.path,
    url = 'http://127.0.0.1:8080'
    ;


var process = childProcess.exec(phPath +" ph_modules/index.js ", processHandler);
function processHandler(error, stdout, stderr) {
    if (error) console.log('Exec error: '+ error);

    fs.writeFile('output.txt', stdout);

    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
}



//var data = '';
//process.on('data', function (err, chunk) {
//    var data += chunk;
//});
//
//process.on('end', function (err, chunk) {
//   console.log('Channel over.')
//});

console.log('-- Done.');


