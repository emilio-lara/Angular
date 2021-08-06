var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Spread parameter
var newItem = 3;
var oldArray = [1, 2];
var newArray = __spreadArrays(oldArray, [newItem]);
console.log("Printing the combinate array features");
console.log(newArray);
var oldPerson = { name: 'John' };
var newPerson = __assign(__assign({}, oldPerson), { age: 20 });
console.log(newPerson);
var parameter = 'parameter';
var parameter2 = 'parameter2';
//String HARD READABILITY 
var url = 'http://path_domain' +
    'path_to_resource' + parameter +
    '=' + 'param2=' +
    parameter2;
var baseURL = 'http://path_domain';
var path_to_resource = 'path_to_resource';
// String IMPROVED READABILITY
var url2 = baseURL + "/" + path_to_resource + "?\nparam=" + parameter + "&param2=" + parameter2;
