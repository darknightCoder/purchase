var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');
var html = fs.readFileSync('./po.html', 'utf8');
const base = path.resolve('static'); //  just relative path to absolute path
// you have to set 'file://'


var options = {base: `file://${base}`, format: 'letter' };

pdf.create(html, options).toFile('./po10.pdf', function(err, res) {
 if (err) return console.log(err);
 console.log(res); // { filename: '/app/businesscard.pdf' }
});