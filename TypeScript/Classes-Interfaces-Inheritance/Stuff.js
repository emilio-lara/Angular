var Stuff = /** @class */ (function () {
    function Stuff() {
    }
    Stuff.prototype.execute = function () {
        if (this.srv.isAuthenticated) {
        }
        else { }
    };
    return Stuff;
}());
//Better way to test
var Stuff2 = /** @class */ (function () {
    function Stuff2(srv) {
        this.srv = srv;
    }
    Stuff2.prototype.execute = function () {
        if (this.srv.isAuthenticated) {
            console.log("Service done!");
        }
        else {
            console.log("No service done!");
        }
    };
    return Stuff2;
}());
var MockAuthService = /** @class */ (function () {
    function MockAuthService() {
    }
    MockAuthService.prototype.isAuthenticated = function () { return true; };
    return MockAuthService;
}());
var srv = new MockAuthService();
var stuff = new Stuff2(srv);
stuff.execute();
