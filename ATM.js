
var readline = require('readline')
var takeInput = readline.createInterface(process.stdin.process, process.stdout)

takeInput.question("Enter User id : ",function(id){
    takeInput.question("Enter User Password : ",function(pass){
        takeInput.question("Enter Cash Withdraw : ",function(cash){

            if(id = "Laiba"){
                console.log(id);
            }
            else{
                console.log("Id is invalid");
            }
             if(Password = "_laiba*78"){
                console.log(parseInt(pass));
            }
            else{
                console.log("Sorry! The Password is incorrect");
            }
            if(cash = "15,000"){
                console.log(parseInt(cash));
            }
            else{
                console.log("You don't have enough amount");
            }
        })
      })
    })