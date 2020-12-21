function isBigenough(element, index, array){
    return (element <=15);
}
var passed = [15, 7, 150, 140, 5, 10].every(isBigenough);
console.log(("Test value :" +passed));