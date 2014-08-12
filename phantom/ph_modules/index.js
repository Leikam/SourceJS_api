var webpage = require('webpage'),
    page = webpage.create(),

    fs = require('fs'),
    system = require('system');

// arguments from node query
var url = system.args[1],
    id = system.args[2];

page.open(url, function (status) {
    if (status !== 'success') console.log('Сервер не отвечает.');

//    var code = page.evaluate(function (args) {
//        var html;s
//        try {
//            html = document.title;
//        } catch (e) {
//            var msg = 'Тут нет этой информации.';
//            if(e.name == 'TypeError') msg = 'Похоже ты ищешь не в спецификации, друг.';
//            html = msg;
//        }
//
//        return html;
//    }, id);

    var content = page.content;
    console.log(content);

    phantom.exit();
});

page.onError = function(msg, trace) {
    fs.write('ph_modules/output.txt', 'Error: '+ msg + '\nFile: '+ trace[0].file +'\nLine: '+ trace[0].line +'\nFunc: '+ trace[0].function);
};


