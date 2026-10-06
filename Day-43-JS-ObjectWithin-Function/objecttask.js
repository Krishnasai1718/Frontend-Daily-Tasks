// 1. Object within Function

// 1. With Input + Without Return
// Question: Create an employee object using employee name and salary and display the object.

// function displayEmployee(name, salary) {
//     let employee = {
//         name: name,
//         salary: salary,
//         department: "IT"
//     };
//     console.log(employee);
// }
// displayEmployee("Arjun", 35000);


// 2. With Input + With Return
// Question: Create a product object using product name and price and return the object.
// function getProduct(name, price) {
//     let product = {
//         name: name,
//         price: price,
//         category: "Electronics"
//     };
//     return product;
// }
// let result = getProduct("Laptop", 55000);
// console.log(result);

// 2. Named Function

// 3. Without Input + Without Return
// Question: Create an object with a function that displays a welcome message.

// let college = {
//     name: "GNI",
//     welcome: function welcome() {
//         console.log("Welcome to GNI");
//     }
// };
// college.welcome();


// 4. With Input + Without Return
// Question: Create an object with a function that accepts a city name and displays a message.
// let location = {
//     city: "Hyderabad",
//     showCity: function showCity(city) {
//         console.log("You are visiting " + city);
//     }
// };
// location.showCity("Bangalore");

// 5. Without Input + With Return
// Question: Create an object with a function that returns the name of a company.
// let company = {
//     name: "Infosys",
//     getName: function getName() {
//         return company.name;
//     }
// };
// console.log(company.getName());

// 6. With Input + With Return
// Question: Create an object with a function that accepts two numbers and returns their sum.
// let calculator = {
//     add: function add(a, b) {
//         return a + b;
//     }
// };
// console.log(calculator.add(25, 15));

// 3. Anonymous Function

// 7. Without Input + Without Return
// Question: Create an object with an anonymous function that displays a message.
// let laptop = {
//     brand: "Dell",
//     display: function() {
//         console.log("This is a Dell laptop");
//     }
// };
// laptop.display();

// 8. With Input + Without Return
// Question: Create an object with an anonymous function that accepts a person's name and displays a welcome message.
// let welcome = {
//     message: function(name) {
//         console.log("Welcome " + name);
//     }
// };
// welcome.message("Krishna");

// 9. Without Input + With Return
// Question: Create an object with an anonymous function that returns the current course name.
// let course = {
//     name: "Python Full Stack",
//     getCourse: function() {
//         return course.name;
//     }
// };
// console.log(course.getCourse());

// 10. With Input + With Return
// Question: Create an object with an anonymous function that accepts two numbers and returns their multiplication.
// let calculator = {
//     multiply: function(a, b) {
//         return a * b;
//     }
// };
// console.log(calculator.multiply(10, 5));

// 4. Arrow Function

// 11. Without Input + Without Return
// Question: Create an object with an arrow function that displays a message.
// let student = {
//    name: "Ravi",
//     showMessage: () => {
//         console.log("Student is learning JavaScript");
//     }
// };
// student.showMessage();

// 12. With Input + Without Return
// Question: Create an object with an arrow function that accepts a subject and displays it.
// let subject = {
//     display: (subjectName) => {
//         console.log("The subject is " + subjectName);
//     }
// };
// subject.display("JavaScript");

// 13. Without Input + With Return
// Question: Create an object with an arrow function that returns the name of a programming language.
// let language = {
//     name: "Python",
//     getLanguage: () => {
//         return language.name;
//     }
// };
// console.log(language.getLanguage());


// 14. With Input + With Return
// Question: Create an object with an arrow function
// that accepts two numbers and returns the larger number.

// let number = {

//     largest: (a, b) => {

//         if (a > b) {
//             return a;
//         } else {
//             return b;
//         }
//     }
// };

// console.log(number.largest(45, 72));