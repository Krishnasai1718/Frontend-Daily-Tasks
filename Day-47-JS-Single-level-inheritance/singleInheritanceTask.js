// //ex1
// class Smartphone {
//     constructor(brand) {
//         this.brand = brand;
//         console.log("Parent Constructor Called");
//     }
//     showBrand() {
//         console.log("Brand: " + this.brand);
//     }
// }
// class GamingPhone extends Smartphone {
//     showFeature() {
//         console.log("Feature: Gaming Performance");
//     }
// }
// let phone1 = new GamingPhone("iQOO");
// phone1.showBrand();
// phone1.showFeature();



// //ex 2

// class Vehicle {
//     constructor(vehicleName) {
//         this.vehicleName = vehicleName;
//     }
//     showVehicle() {
//         console.log("Vehicle: " + this.vehicleName);
//     }
// }
// class Service extends Vehicle {
//     constructor(vehicleName, serviceType) {
//         super(vehicleName);
//         this.serviceType = serviceType;
//     }
//     showService() {
//         super.showVehicle();
//         console.log("Service Type: " + this.serviceType);
//     }
// }
// let service1 = new Service("Honda City", "Full Service");
// service1.showService();



// //ex3

// class Movie {
//     constructor(movieName) {
//         this.movieName = movieName;
//     }
//     showMovie() {
//         console.log("Movie: " + this.movieName);
//     }
// }
// class Ticket extends Movie {
//     constructor(movieName, seatNumber) {
//         super(movieName);
//         this.seatNumber = seatNumber;
//     }
//     showTicket() {
//         super.showMovie();
//         console.log("Seat Number: " + this.seatNumber);
//     }
// }
// let ticket1 = new Ticket("Avengers", "B12");
// ticket1.showTicket();



// //ex4

// class College {
//     constructor(collegeName) {
//         this.collegeName = collegeName;
//     }
//     showCollege() {
//         console.log("College: " + this.collegeName);
//     }
// }
// class Admission extends College {
//     constructor(collegeName, courseName) {
//         super(collegeName);
//         this.courseName = courseName;
//     }
//     showAdmission() {
//         super.showCollege();
//         console.log("Course: " + this.courseName);
//     }
// }
// let admission1 = new Admission("GNI", "Python Full Stack");
// admission1.showAdmission();



//instance var within class outside method

// class Test{
//     fname ="hero"
// }
// let t1 = new Test()
// console.log("in parent obj" ,t1.fname)
// class Test2 extends Test{
    
// }
// let t2 = new Test2();
// console.log("in child obj" ,t2.fname)