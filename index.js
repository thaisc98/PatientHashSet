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
    var patient7 = new patient_1.Patient("Thais", "BSlmonte", "1234567892");
    var patient8 = new patient_1.Patient("Thais", "CSlmonte", "1234567893");
    var patient9 = new patient_1.Patient("Thais", "OSlmonte", "1234567895");
    var patient2 = new patient_1.Patient("Thais", "Dlmonte", "1234567891");
    var patient6 = new patient_1.Patient("Thais", "Flmonte", "1234567891");
    console.log("This if the objects are equals:" + patient1.equals(patient2));
    theSet.add(patient1);
    console.log("This is patient 1:" + patient1.getHashCode());
    theSet.add(patient7);
    theSet.add(patient8);
    console.log("This is patient 9:" + theSet.add(patient9) + " this should be true  and this is his hashCode " + patient9.getHashCode());
    theSet.add(patient2);
    console.log(theSet.contains(patient2) + " this should be false");
    console.log(theSet.contains(patient9) + " this should be true");
    console.log("remove if if is in the array");
    console.log(theSet.remove(patient2) + " this should be false");
    console.log(theSet.remove(patient9) + " this should be true");
    //console.log(theSet.all());
}
;
main();
