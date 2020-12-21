
console.log("                                                     ");
console.log("  KARACHI UNIVERSITY OF ENGINEERING AND TECHNOLOGY   ");
console.log("                                                     ")

class University {
    constructor(Depart1,Depart2,Depart3,Depart4,Depart5,Depart6){
        this.dep1 = Depart1;
        this.dep2 = Depart2;
        this.dep3 = Depart3;
        this.dep4 = Depart4;
        this.dep5 = Depart5;
        this.dep6 = Depart6;
    }
}
class Department extends University{
    disp(){
        console.log(`
        Department1 = ${this.dep1}
        Department2 = ${this.dep2}
        Department3 = ${this.dep3}
        Department4 = ${this.dep4}
        Department5 = ${this.dep5}
        Department6 = ${this.dep6}`);
        
    }
}

var obj = new Department ("UBIT", "Business School", "IBA", "Mathematics", "Commerce", "Applied Physics")

obj.disp() 