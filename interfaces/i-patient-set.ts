import { Patient } from '../classes/patient';

export interface IPatientSet{
    
  size:  number;

  add: (newPatient: Patient) => boolean;

  contains: (somePatient: Patient) => boolean;

  remove: (somePatient: Patient) => boolean;

  all: () => Patient[];
}
