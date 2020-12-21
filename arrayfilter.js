function isBigenough(element, index, array){
    return(element>=10);

}
var passed = [12, 5, 10, 55].filter(isBigenough);
console.log("Test value :" +passed);
