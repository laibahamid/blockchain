console.log("                        ");
console.log("   CURRICULUM VITAE     ");
console.log("                        ");

class Student {
    constructor(Name, F_Name, DOB, Contact, Email, CNIC, Qualification, Nationality, Religion){
    this._name = Name;
    this._fname = F_Name;
    this._dob = DOB;
    this._contact = Contact;
    this._email = Email;
    this._cnic = CNIC;
    this._qualification = Qualification;
    this._nationality = Nationality;
    this._religion = Religion
    }
set name(value1){
    this._name = value1;
}
get name(){
    return this._name;
}
set fname(value2){
    this._fname = value2;
}
get fname(){
    return this._fname;
}
set dob(value3){
    this._dob = value3;
}
get dob(){
    return this._dob;
}
set contact(value4){
    this._contact = value4;
}
get contact(){
    return this._contact;
}
set email(value5){
    this._email = value5;
}
get email(){
    return this._email;
}
set cnic(value6){
    this._cnic = value6;
}
get cnic(){
    return this._cnic;
}
set qualification(value7){
    this._qualification = value7;
}
get qualification(){
    return this._qualification;
}
set nationality(value8){
    this._nationality = value8;
}
get nationality(){
    return this._nationality;
}
set religion(value9){
    this._religion = value9;
}
get religion(){
    return this._religion;
}
}

let information = new Student("Name : Laiba", "Father,s Name : Mohammad Hamid Khan", "DOB : 14-05-2003", "Contact : 0300-876328", "E-mail : laibahamid@gmail.com",
                               "CNIC : 42101-57375897-8", "Qualification : Intermediate", "Nationality : Pakistani", "Religion : Islam")
   console.log(information.name);
   console.log(information.fname);
   console.log(information.dob);
   console.log(information.contact);
   console.log(information.email);
   console.log(information.cnic);
   console.log(information.qualification);
   console.log(information.nationality);
   console.log(information.religion);
   
  
   
   




