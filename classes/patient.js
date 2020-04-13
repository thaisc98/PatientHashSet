"use strict";
exports.__esModule = true;
var Patient = /** @class */ (function () {
    function Patient(name, lastName, id) {
        var _this = this;
        this.setName = function (name) {
            _this.name = name;
        };
        this.getName = function () { return _this.name; };
        this.setLastName = function (lastName) {
            _this.lastName = lastName;
        };
        this.getLastName = function () { return _this.lastName; };
        this.setId = function (id) {
            _this.id = id;
        };
        this.getId = function () { return _this.id; };
        this.getHashCode = function () {
            // let firstLettler = this.lastName.charAt(0);
            var hash = 0;
            var character = _this.lastName.charCodeAt(0);
            hash = ((hash << 5) - hash) + character;
            hash = hash & hash;
            return hash;
        };
        this.equals = function (patient) {
            return _this.id === patient.id;
        };
        this.name = name;
        this.lastName = lastName;
        this.id = id;
    }
    return Patient;
}());
exports.Patient = Patient;
