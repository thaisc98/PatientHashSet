
export class Patient implements Object{
    private name: string;
    private lastName: string;
    private id: string;
    private hashCode: number;
 

    constructor(name: string, lastName: string, id: string) {
      this.name = name;
      this.lastName = lastName;
      this.id = id;

    }

    setName = (name: string): void => {
      this.name = name;
    };
  
    getName = () => this.name;
  
    setLastName = (lastName: string): void => {
      this.lastName = lastName;
    };
  
    getLastName = (): string => this.lastName;

    setId = (id: string): void => {
        this.id = id;
    }

    getId = (): string => this.id;


    getHashCode = (): number => {

        // let firstLettler = this.lastName.charAt(0);
        let hash = 0;
        const character = this.lastName.charCodeAt(0);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash;
        
        return hash;
        
    };


    equals = (patient: Patient): boolean =>{
        return this.id === patient.id; 
    }




    

    


    

    
  }
  