"use strict";
exports.__esModule = true;
var PatientHashSet = /** @class */ (function () {
    function PatientHashSet(buckets) {
        this.patientList = [];
        this.buckets = buckets;
    }
    PatientHashSet.prototype.add = function (newPatient) {
        var patientSearch = true;
        var number1Ybucket = newPatient.getHashCode() % this.buckets;
        if (!this.patientList[number1Ybucket]) {
            //kids not do this in the house
            //@ts-ignore
            this.patientList[number1Ybucket] = [];
            this.size += 1;
            this.patientList[number1Ybucket].push(newPatient);
            return patientSearch;
        }
        ;
        for (var _i = 0, _a = this.patientList; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element) {
                for (var _b = 0, _c = element; _b < _c.length; _b++) {
                    var p = _c[_b];
                    if (p.equals(newPatient)) {
                        patientSearch = false;
                        break;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        if (patientSearch) {
            this.patientList[number1Ybucket].push(newPatient);
            this.size += 1;
        }
        return patientSearch;
    };
    ;
    PatientHashSet.prototype.contains = function (somePatient) {
        var patientSearch = true;
        var number1Ybucket = somePatient.getHashCode() % this.buckets;
        for (var _i = 0, _a = this.patientList[number1Ybucket]; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.equals(somePatient)) {
                patientSearch = false;
                return patientSearch;
            }
        }
        return patientSearch;
    };
    ;
    PatientHashSet.prototype.remove = function (somePatient) {
        var bucket = somePatient.getHashCode() % this.buckets;
        if (!this.patientList[bucket]) {
            return false;
        }
        var patientIndex = this.patientList[bucket].indexOf(somePatient);
        var patientExists = patientIndex >= 0;
        if (patientExists && patientIndex) {
            this.patientList.splice(patientIndex, 1);
            this.size -= 1;
        }
        return patientExists;
    };
    PatientHashSet.prototype.all = function () {
        return this.patientList;
    };
    ;
    return PatientHashSet;
}());
exports.PatientHashSet = PatientHashSet;
