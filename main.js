// ***** JS OBJECTS HOMEWORK *****


// TASK 1: 

// Based on existing object:

// var person = {
// 	name: "Mike";
// 	age: 28,
// 	married: true
// }

// Create a function which should change age to 34, and delete married property. In the end console.log object.


(function() {

    var person = {
        name: "Mike",
        age: 28,
        married: true
    }

    function changeProperties(man) {

        man.age = 34;
        delete man.married;

        console.log(man);
    }

    changeProperties(person);

})();

// TASK 2: 

// Based on existing object:

// var person = {
// 	name: "Jack";
// 	age: 32,
// 	married: true
// }

// Create a function which should check if person has children property, if not add it. Its value should be array containing two objects with children data. Each object should contain child name, age and gender.


(function() {


    
})();

// TASK 3:

// Based on existing array of objects:

// var students = [ 
//    {
//        name: 'Mike',
//        age: 28,
//        passed: false
//    },
//    {
//        name: 'Anna',
//        age: 23,
//        passed: true
//    },
//    {
//        name: 'Jack',
//        age: 32,
//        passed: true
//    },
// ];

// Create a function which should console.log if student passed exam, result should be something like:

// "Jack passed exam" or "Mike didn't pass exam"


(function() {


    
})();

// TASK 4:

// Based on existing array of objects:

// var students = [ 
//    {
//        name: 'Mike',
//        age: 28,
//        passed: false
//    },
//    {
//        name: 'Anna',
//        age: 23,
//        passed: true
//    },
//    {
//        name: 'Jack',
//        age: 32,
//        passed: true
//    },
// ];

// Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array:

// var names = ['Mike', 'Anna', 'Jack'];


(function() {


    
})();


// TASK 5:

// Based on existing object:

// var person = {
// 	name: "Jack";
// 	age: 32,
// 	married: true
// }

// Create the other object which should inherit data from existing object. Then console.log age by accessing the newly created object.


(function() {


    
})();

// TASK 6:

// Based on existing object:

// var person = {
// 	name: "Mike";
// 	age: 28,
// 	married: true
// }

// Create a method which, when called, should console.log name and age of existing object.


(function() {


    
})();

// TASK 7:

// Based on existing object:

// var person = {};

// Create a method which should create name, age and married properties in existing object, based on parameters passed in method.

(function() {


    
})();




