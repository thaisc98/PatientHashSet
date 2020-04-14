import {IPatientSet} from '../interfaces/i-patient-set'
import { Patient } from '../classes/patient';

export class PatientHashSet implements IPatientSet{
    patientList: any;
    size: number;
    private buckets: number;

    constructor(buckets: number) {
        this.patientList = [];
        this.buckets = buckets;
    }

    add(newPatient: Patient): boolean {
        let patientSearch: boolean = true;

        const number1Ybucket = newPatient.getHashCode() % this.buckets;
        
        if (!this.patientList[number1Ybucket]){
            //kids not do this in the house
            //@ts-ignore
            this.patientList[number1Ybucket] = [];

            this.size += 1;
            this.patientList[number1Ybucket].push(newPatient);
            return patientSearch;
        };
        
        for (let element of this.patientList){
            if (element) {
                for (let p of element as Patient[]) {
                    if (p.equals(newPatient)) {
                         patientSearch = false;
                         break;
                    };
                };
            };
        };

        if(patientSearch){
            this.patientList[number1Ybucket].push(newPatient);
            this.size += 1;
        }

        return patientSearch;
    };


    contains(somePatient: Patient): boolean{

        const number1Ybucket = somePatient.getHashCode() % this.buckets;

        let patientIndex: number = this.patientList[number1Ybucket].indexOf(somePatient);
        let patientExists: boolean = patientIndex >= 0;

        if(patientExists && patientIndex){
            return patientExists = true;
        }else{
            return patientExists = false;
        }
    };

    remove (somePatient: Patient): boolean {

        let number1Ybucket = somePatient.getHashCode() % this.buckets;
        
        if (!this.patientList[number1Ybucket]){
            return false;
        }

        let patientIndex: number = this.patientList[number1Ybucket].indexOf(somePatient);
        let patientExists: boolean = patientIndex >= 0;

        if(patientExists && patientIndex){
            this.patientList.splice(patientIndex,1)
            this.size -= 1;
        }

        return patientExists;
    }

    all (): Patient[]{
        return this.patientList;
    };

}