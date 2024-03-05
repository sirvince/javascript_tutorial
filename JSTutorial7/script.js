let person = {
  firstName : "Vince",
  lastName : "Dallego",
  age : 26,
  hobbies : ["coding","eating","sleeping"],
  pets: {
    0 : {
      name : "Shadow",
      type : "Dog"
    },
    1 : {
      name : "Mocha",
      type : "Cat"
    }
  }
}

// console.log(person["pets"][0]["name"]);
// console.log(person.pets[0].name);


// console.log(person);


//overide value

let students = [
  {
    firstName : "Vince",
    lastName : "Dallego",
    age : 26
  },
  {
    firstName : "Rhoel",
    lastName : "Sarino",
    age : 24
  },
  {
    firstName : "Jonas",
    lastName : "Ferrer",
    age : 26
  },
]
console.log(students[0]);
console.log(students[0].firstName);



// let strStudent = JSON.stringify(student);
// console.log(strStudent);


// let strStudent = `{"firstName": "Vince" "lastName": "Dallego","age": 26}`;
// let student = JSON.parse(strStudent);
// console.log(student);


//Only works on "String" key
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);