"use strict";
/*
    var helloWorld = function() {
        console.log('Hello world');
    }

    const hello = () => {
        
    }
*/
exports.__esModule = true;
var patient_hash_set_1 = require("./b-logic/patient-hash-set");
var patient_1 = require("./classes/patient");
function main() {
    var theSet = new patient_hash_set_1.PatientHashSet(3);
    var patient1 = new patient_1.Patient("Thais", "ASlmonte", "1234567891");
    var patient01 = new patient_1.Patient("Thais", "BSlmonte", "1234567892");
    var patient11 = new patient_1.Patient("Thais", "CSlmonte", "1234567893");
    var patient12 = new patient_1.Patient("Thais", "OSlmonte", "1234567895");
    var patient2 = new patient_1.Patient("Thais", "Dlmonte", "1234567891");
    var patient6 = new patient_1.Patient("Thais", "Flmonte", "1234567891");
    console.log("This if the objects are equals:" + patient1.equals(patient2));
    theSet.add(patient1);
    console.log("This is patient 1:" + patient1.getHashCode());
    console.log("///////////////////////////////////////////////////");
    theSet.add(patient01);
    theSet.add(patient11);
    theSet.add(patient12);
    theSet.add(patient2);
    theSet.add(patient6);
    console.log("///////////////////////////////////////////////////");
    console.log("This if the objects are equals:" + patient1.equals(patient6));
    console.log(theSet.add(patient2) + "this should be false");
    console.log(theSet.add(patient6) + "this should be false");
    console.log(theSet.contains(patient2) + "this should be false");
    console.log(theSet.contains(patient6) + "this should be false");
    console.log("remove");
    console.log(theSet.remove(patient2) + "this should be true");
    console.log(theSet.remove(patient6) + "this should be true");
}
;
main();
