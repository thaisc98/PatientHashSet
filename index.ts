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
         let patient7: Patient = new Patient("Thais","BSlmonte","1234567892");
         let patient8: Patient = new Patient("Thais","CSlmonte","1234567893");
         let patient9: Patient = new Patient("Thais","OSlmonte","1234567895");

         let patient2: Patient = new Patient("Thais","Dlmonte","1234567891");
         let patient6: Patient = new Patient("Thais","Flmonte","1234567891");


        console.log("This if the objects are equals:" + patient1.equals(patient2))

        theSet.add(patient1);
        console.log("This is patient 1:"+ patient1.getHashCode());

        theSet.add(patient7);
        theSet.add(patient8);
        console.log("This is patient 9:"+theSet.add(patient9) +  " this should be true  and this is his hashCode "+ patient9.getHashCode());

        theSet.add(patient2);

        console.log(theSet.contains(patient2) + " this should be false");

        console.log(theSet.contains(patient9) + " this should be true");

        console.log("remove if if is in the array");
        console.log(theSet.remove(patient2) + " this should be false");
        console.log(theSet.remove(patient9) + " this should be true");

        console.log(theSet.all());
  

    };

    main();