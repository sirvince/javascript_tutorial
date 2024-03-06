//Array of Strings
// let names = ["Alenere","David","Jaymar","Maye","Ace"];
// /* 
//     Syntax
//     identifier[index] = value;
// */
// names[0] = "Vincent";
// alert(names[0])

// //Delete using Length
// names.length = 4;
// console.log("using length", names);

// //Delete using pop()
// names.pop()
// console.log("using pop", names);

// //Delete using shift()
// names.shift()
// console.log("using shift", names);

// //Delete using slice(start_index,end_index)
// console.log("using slice", names.slice(0,1));



// // ADD using Length
// names[names.length] = "Vincent";
// console.log("using Length", names)

// // ADD using push(value)
// names.push("Rhoel");
// console.log("using Push", names)

// // ADD using unshift
// names.unshift("Jonas");
// console.log("using unshift", names)



// alert(names);

// /* 
//     Syntax
//     identifier[index] = value;
// */
// // names[5] = "Vincent";
// // alert(names[0]);
// // alert(names);
// // alert(names.length);
// // alert(names[5]);






// alert(`The Length of this Array is ${names.length}`);



// //Array of Numbers
// let numbers = [3,6.5,9.35,12.75,7,2];
// alert(names);
// console.log(names);

// //Array of Mixed Datatypes
// let mixed = ["Alenere",99,"David",true,3.99];
// alert(names);
// console.log(names);

// //Empty Array
// let dummy = [];


// /* 
//     Systax
//     identifier[index];
// */
// let cars = ["Yarris",]
// alert(names[0]);





//Syntax
// for (initialization; condition; increment/decrement){
//     //code blocks
// }

// example 

// for (let index = 0; index < 5; index++){
//     console.log("index",index)
// }



// Syntax
// while(condition){
//     //code blocks
// }

// example 

// let index = 0;
// while(index < 5){
//     console.log("index",index)
//     index++;
// }


// let people = ["David","Vincent","Gibert","James"];
// let index = 0;


// do{
//     console.log(people[index]);
//     index++;

//     if(index === 1){
//         break;
//     }
// }while(people[index])

// while(people[index]){
//     console.log(people[index]);
//     index++;

//     if(index === 1){
//         break;
//     }
// }


// Syntax
// do{
//     //code blocks
// }while(condition)


// let index = 0;
// do{
//     console.log("index",index)
//     index++;
// }while(index < 5)


// let people = ["David","Vincent","Gibert","James"];
// let index = 0;

// do{
//     console.log(people[index]);
//     index++;
// }while(people[index])


function printPattern(range) {
    for(var i=1;i<=range;i++){
      var str="";
      for(var j=1;j<=i;j++){
        str += j+" ";
      }
      console.log(str);
    }
}

printPattern(8);