var colorutils = require('./colorutil');

var results = colorutils.darken(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]));

console.log(results);
