
console.log("                                 ");
console.log("       CIRRICULUM VITAE             ");
console.log(" PERSONAL INFORMATION:"   );
console.log("                                  ");

var mapcv = new Map();

mapcv.set("name","Name : Laiba");
mapcv.set("fname","Father's name: M.Hamid");
mapcv.set("dob","DOB : 14-05-2003");
mapcv.set("contact","Contact : 0300-234567");
mapcv.set("email","E-mail : laibahamid456@gmail.com");

console.log(mapcv.get("name"));
console.log(mapcv.get("fname"));
console.log(mapcv.get("dob"));
console.log(mapcv.get("contact"));
console.log(mapcv.get("email"));

console.log("                                  ");
console.log("  EDUCATIONAL INFORMATION:    ");
console.log("                                   ");

mapcv.set("matriculation","Matriculation : Passed in 2018");
mapcv.set("intermediate","Intermediate : Passed in 2020");
mapcv.set("skills","Course : Blockchain from Sir Syed University");

console.log(mapcv.get("matriculation"));
console.log(mapcv.get("intermediate"));
console.log(mapcv.get("skills"));