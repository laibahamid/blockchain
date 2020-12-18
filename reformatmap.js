
console.log("                          ");
console.log(" LIBRARY MANAGEMENT SYSTEM");
console.log("                                  ");

let studentInfo = [
    {key : "Name ", value : "Laiba Hamid"},
    {key : "Father's Name ", value : "Mohammad Hamid Khan"},
    {key : "Standard ", value : "VII"},
    {key : "Section ", value : "A"},
]
console.log("                                               ");
var reformattedArray = studentInfo.map(obj => {
    var robj = {}
    robj[obj.key] = obj.value
    return console.log(robj);
});
console.log("                                                    ");
let booksInfo = [
    {key : "English", value1 : "English_Poetry(7) , "  ,value2 : "Oxford_English(5)"},
    {key : "Urdu", value1 : "Urdu_Poetry(12) , "   ,value2 : "Urdu_Literature(8)" },
    {key : "Physics", value1 : "Physics_Ptractical(10) , ",value2 : "Physics_Theory(8)" },
    {key : "Computer", value1 : "Comp_Practical(4) , ",value2 : "Comp_Theory"},
    {key : "Chemistry", value1 : "Chemistry_Practical(8) , ",value2 : "Chemistry_Theory"},
    ]


var reformattedArray1 = booksInfo.map(obj => {
        var robj = {}
        robj[obj.key] = obj.value1 + obj.value2
        return console.log(robj);
    
});