// let x = 5;
// console.log (x == "5");
// //Output : true

// console.log (x === "5");
// //Output : false


// console.log (x != "5");
// //Output : false

// console.log (x !== "5");
// //Output : true


// console.log(10 > 10);
// //Output : false

// console.log(10 < 10);
// //Output : false


// console.log(10 >= 10);
// //Output : true

// console.log(10 <= 10);
// //Output : true


// Print "Invalid Age" if age is less than or equal to 0
// Else if Print "Legal Age" if age is greater than or equal to 18 
// Else Print "Minor Age" if age is less than 18
// let age = 0;

// if(age <=0){
//     console.log("Invalid Age")
// }else if ( age >= 18 ){
//     console.log("Legal Age")
// }else{
//     console.log("Minor Age")
// }


// Print "Invalid Age" if age is less than or equal to 0
// Else if Print "Legal Age" if age is greater than or equal to 18 
// Else Print "Minor Age" if age is less than 18
// let number = 0;
// let output  = "";
// switch(number){
//     case 0 :
//         output = "0";
//         break;
//     case 1  :
//         output = "1"
//         break;
//     default:
//         output = "Not found."
// }

// console.log(`The value is ${output}`)



// //If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
// let hour = 2;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);



//Logical Operators

// AND OPERATOR
// let age = 18;
// let experience = 3;
// let language = "java";

// if(age >= 18 && experience > 1 && language === "java"){
//     alert("You are qualified for this job position");
// }else{
//     alert("You are not qualified fot this job position")
// }


// OR Operator
// let hasDegree = true;
// let experience = 3;

// if ( hasDegree || experience > 4)
//     alert("You are qualified for this job position");
// else
//     alert("You are not qualified fot this job position");


// NOT Operator
let isTall = true;

if(!isTall)
    alert("Wow Tall");
else
    alert("Small");


