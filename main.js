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

    var person = {
        name: "Jack",
        age: 32,
        married: true
    }

    function personChildren(man) {

        if(!man.children) {
            man.children = [
                {name: 'Mike',
                age: 5,
                gender: 'male'
                },
                {name: 'Ann',
                age: 3,
                gender: 'female'
                }
            ]
        }
        // console.log(man);
    }

    personChildren(person);
    
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

    var students = [ 
        {
            name: 'Mike',
            age: 28,
            passed: false
        },
        {
            name: 'Anna',
            age: 23,
            passed: true
        },
        {
            name: 'Jack',
            age: 32,
            passed: true
        }
    ];

    function printResult(results, name) {

        for(var i = 0; i < results.length; i++) {
            //kako fja radi bez deklarisanja varijable student?
            // var student;
            if (results[i].name === name) {
                student = results[i];
            }
        }

        student.passed === true ? console.log(student.name + " passed the exam.") : console.log(student.name + " did not passed the exam.");
        
    }

    printResult(students, 'Anna');
    printResult(students, 'Mike');
    printResult(students, 'Jack');
    
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

    var students = [ 
        {
            name: 'Mike',
            age: 28,
            passed: false
        },
        {
            name: 'Anna',
            age: 23,
            passed: true
        },
        {
            name: 'Jack',
            age: 32,
            passed: true
        },
    ];

    function repackToArray(arr) {

        var names = [];
        var ages = [];
        var passed = [];

        for(var i = 0; i < arr.length; i++) {

            names[names.length] = arr[i].name;
            ages[ages.length] = arr[i].age;
            passed[passed.length] = arr[i].passed;
        }

        // console.log(names, ages, passed);

    }

    repackToArray(students);

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

    var person = {
        name: "Jack";
        age: 32,
        married: true
    }

    

    
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




