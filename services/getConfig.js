var fs = require('fs');
var dirName = __dirname;

var confPath = dirName + "/../config/conf.properties";



var key = "";
var value = "";


function createConfProperty(data) {
    var map = new Map();
    var i = 0;
    data.toString().split(/\r?\n/).forEach(function(line) {
        key = line.trim().split("=")[0];
        if (line.startsWith("#")) {
            key = "";
        }
        if (null != key && key != "") {
            value = line.trim().split("=")[1];
            console.log(i + " " + key + " " + value)
            map.set(key, value);
            i++;
        }else{
          return;
        }
    });
    return map;
}


exports.makeProperties = function() {
    var map = new Map();
    fs.readFile(confPath, 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            map = createConfProperty(data);
        }
    });
    console.log(map.get("collector.data.params"));
}
