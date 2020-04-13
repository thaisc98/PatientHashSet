/*     
    var helloWorld = function() {
        console.log('Hello world');
    }

    const hello = () => {
        
    }
*/

import { PatientHashSet } from "./b-logic/patient-hash-set";
import { Patient } from "./classes/patient";


    function main () {
         let theSet: PatientHashSet = new PatientHashSet(3);
         
         let patient1: Patient = new Patient("Thais","ASlmonte","1234567891");
         let patient01: Patient = new Patient("Thais","BSlmonte","1234567892");
         let patient11: Patient = new Patient("Thais","CSlmonte","1234567893");
         let patient12: Patient = new Patient("Thais","OSlmonte","1234567895");

         let patient2: Patient = new Patient("Thais","Dlmonte","1234567891");
         let patient6: Patient = new Patient("Thais","Flmonte","1234567891");


        console.log("This if the objects are equals:" + patient1.equals(patient2))

        theSet.add(patient1);
        console.log("This is patient 1:"+ patient1.getHashCode());
        console.log("///////////////////////////////////////////////////")

        theSet.add(patient01)
        theSet.add(patient11)
        theSet.add(patient12)
        theSet.add(patient2) 
        theSet.add(patient6) 

        console.log("///////////////////////////////////////////////////")
        console.log("This if the objects are equals:" + patient1.equals(patient6))

        console.log(theSet.add(patient2) + "this should be false");
        console.log(theSet.add(patient6) + "this should be false");
        console.log(theSet.contains(patient2) + "this should be false");
        console.log(theSet.contains(patient6) + "this should be false");
        

        console.log("remove");

        console.log(theSet.remove(patient2) + "this should be true");
        console.log(theSet.remove(patient6) + "this should be true");
        


    };

    main();