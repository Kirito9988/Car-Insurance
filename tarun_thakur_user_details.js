"use strict";
var userData = [["Name was not valid", "Email not valid", "Number not valid", "Balance not valid"],
    ["Name was not valid", "Email not valid", "Number not valid", "Balance not valid"],
    ["Name was not valid", "Email not valid", "Number not valid", "Balance not valid"],
    ["Name was not valid", "Email not valid", "Number not valid", "Balance not valid"],
    ["Name was not valid", "Email not valid", "Number not valid", "Balance not valid"]];
var formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
});
function enterName(x) {
    var Input = true;
    while (Input) {
        var nameFunc = prompt("Enter the name:");
        var func = new RegExp("^[a-z A-Z]+$");
        if (nameFunc.length > 0 && nameFunc.toString().match(func)) {
            userData[x][0] = "Name : " + nameFunc;
            Input = false;
        }
        else {
            alert("Enter a valid name");
        }
    }
}
function enterEmail(x) {
    var emailInput = true;
    while (emailInput) {
        var emailFunc = prompt("Enter the email:");
        var email = new RegExp("^[a-zA-Z0-9]+[@][a-zA-Z][.com]");
        if (emailFunc.length > 0 && emailFunc.toString().match(email)) {
            userData[x][1] = 'Email_Id : ' + emailFunc;
            emailInput = false;
        }
        else {
            alert("enter a valid email:");
        }
    }
}
function enterPhone(x) {
    var phone = true;
    while (phone) {
        var phoneFunc = prompt("Enter the phone:");
        var pnoNew = "";
        var numberVer = new RegExp("^[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$");
        if (phoneFunc.toString().match(numberVer)) {
            for (var j = 0; j < 10; j++) {
                if (j == 3 || j == 6) {
                    pnoNew += "-" + phoneFunc.toString().charAt(j);
                }
                else {
                    pnoNew += phoneFunc.toString().charAt(j);
                }
            }
            userData[x][2] = "Phone_No : " + pnoNew;
            phone = false;
        }
        else {
            alert("Enter Valid Phone Number:");
        }
    }
}
function enterAccount(x) {
    var account = true;
    while (account) {
        var n = parseInt(prompt("Enter the number for account type: \r\n 1. Main Balance \r\n 2. Cashback \r\n 3. Bonus \r\n 4. Gift"));
        switch (n) {
            case 1:
                var mainbalance = RegExp('^[0-9]+$');
                var balanceM = parseInt(prompt("Enter the balance:"));
                if (balanceM.toString().match(mainbalance) && balanceM != 0) {
                    var txt = formatter.format(balanceM).toString();
                    userData[x][3] = "Main Balance : " + txt;
                    account = false;
                    break;
                }
                else {
                    alert('enter valid number:');
                }
            case 2:
                var cashback = RegExp('^[0-9]+$');
                var balancC = parseInt(prompt("Enter the balance:"));
                if (balancC.toString().match(cashback) && balancC != 0) {
                    var txt = formatter.format(balancC).toString();
                    userData[x][3] = 'Cashback : ' + txt;
                    account = false;
                    break;
                }
                else {
                    alert('enter valid number:');
                }
            case 3:
                var Bonus = RegExp('^[0-9]+$');
                var balancB = parseInt(prompt("Enter the balance:"));
                if (balancB.toString().match(Bonus) && balancB != 0) {
                    var txt = formatter.format(balancB).toString();
                    userData[x][3] = "Balance : " + txt;
                    account = false;
                    break;
                }
                else {
                    alert('enter valid number:');
                }
            case 4:
                var Gift = RegExp('^[0-9]+$');
                var balancG = parseInt(prompt("Enter the balance:"));
                if (balancG.toString().match(Gift) && balancG != 0) {
                    var txt = formatter.format(balancG).toString();
                    userData[x][3] = "Gift : " + txt;
                    account = false;
                    break;
                }
                else {
                    alert('enter valid number:');
                }
            default:
                alert("Please enter a valid option");
                break;
        }
    }
}
var num6 = parseInt(prompt("How many users?"));
var numVerify1 = new RegExp("^[0-9]+$");
if (num6.toString().match(numVerify1) && num6 != 0) {
    var i_1 = 0;
    for (i_1 = 0; i_1 < num6;) {
        enterName(i_1);
        enterEmail(i_1);
        enterPhone(i_1);
        enterAccount(i_1);
        if (i_1 == num6 - 1) {
            for (var a = 0; a <= i_1; a++) {
                for (var b = 0; b <= 3; b++) {
                    console.log(userData[a][b]);
                }
            }
        }
        i_1++;
    }
}
else {
    alert("Enter a valid number");
}
