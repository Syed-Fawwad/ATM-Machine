import inquirer from "inquirer";
let myBalance = 10000;
console.log("Your total balance is " + myBalance);
let pincode = 1613;
let pinAnswer = await inquirer.prompt([{
        message: "ENTER YOUR PIN NUMBER",
        type: "number",
        name: "pin",
    }]);
if (pinAnswer.pin === pincode) {
    console.log("CORRECT PIN!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "what do you want to do?",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation == "withdraw") {
        let FastOption = await inquirer.prompt([{
                name: "amountSelection",
                type: "list",
                message: "do you want to withdraw",
                choices: ["500", "1000", "2500", "5000", "SELECT MANUALLY"]
            }]);
        if (FastOption.amountSelection == "500") {
            console.log("YOUR REMAINING BALANCE", myBalance -= FastOption.amountSelection);
        }
        else if (FastOption.amountSelection == "1000") {
            console.log("YOUR REMAINING BALANCE", myBalance -= FastOption.amountSelection);
        }
        else if (FastOption.amountSelection == "2500") {
            console.log("YOUR REMAINING BALANCE", myBalance -= FastOption.amountSelection);
        }
        else if (FastOption.amountSelection == "5000") {
            console.log("YOUR REMAINING BALANCE", myBalance -= FastOption.amountSelection);
        }
        else if (FastOption.amountSelection == "SELECT MANUALLY") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }]);
            if (amountAns.amount < myBalance) {
                console.log("YOUR REMAINING BALANCE", myBalance -= amountAns.amount);
            }
            else if (amountAns.amount > myBalance) {
                console.log("you donot have sufficient balance in your account.");
            }
            ;
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("INCORRECT PIN!!");
}
;
