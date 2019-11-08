"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
(function () {
    var a = 1;
    var data = fs_1.readFileSync('./index.js').toString();
    console.log(data);
})();
