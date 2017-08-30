var x = prompt ("How much money you got my dude?");
var y = prompt ("How much do you wanna withdraw?");
var bankAccount = {};
bankAccount["name"] = "Justin";
bankAccount["balance"]=x;
bankAccount["balance"]-=y;
bankAccount["phone"]=4222222;

window.alert(bankAccount.balance)