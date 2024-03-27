const number = 100;
let accountName = "Akshay";
var accountDetails = "Muja nhi pta ";
accountVerified = true;

accountName = "Harshita";
accountDetails = "I Need You";
accountVerified = false;
// number = 12  constact never assigned different values

/*
Prefer not to use var in javascript
because of issue in block scope and fucntional scope
*/
console.log(number);
console.table([number, accountName, accountDetails, accountVerified])