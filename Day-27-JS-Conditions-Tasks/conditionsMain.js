//------------
//If Else
//-------------

// 1.Check whether a given number is a 3-digit number or not.

// let n1 = 6878;
// if (n1>=100 && n1<=999){
//     console.log(n1," is three digit number")
// }
// else{
//     console.log(n1," is not a three digit number")
// }




//2.Check whether a given number is divisible by both 3 and 5 or not.

// let n2 = 69;
// if(n2 % 3 ==0 && n2 %5==0){
//     console.log(n2," is divisible by both 3 and 5 ")
// }
// else{
//     console.log(n2," is not divisible by both 3 and 5 ")
// }




//3.Check whether a given triangle is a valid triangle or not.
    //  hint :The sum of any two sides should be greater than the third side.

// let ang1 = 40;
// let ang2 = 40;
// let ang3 = 80;
// if(((ang1 + ang2) > ang3) && ((ang2 + ang3) > ang1) && ((ang1 + ang3) > ang2)){
//     console.log("the triangle is valid")
// }
// else{
//     console.log("the triangle is not a valid triangle")
// }


// 4.Check whether a given number is a multiple of 10 or not

// let num = 30;
// if(num%10===0){
//     console.log(num," is multiple of 10")
// }
// else{
//     console.log(num," is not a multiple of 10")
// }


//--------------------
//if-elif-else
//--------------------


// 1.Check the type of triangle based on its sides.
//         Equilateral, Isosceles, or Scalene.
// let side1 = 60;
// let side2 = 60;
// let side3 = 60;

// if (side1 === side2 && side2 === side3) {
//     console.log("Equilateral Triangle");
// } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("Isosceles Triangle");
// } else {
//     console.log("Scalene Triangle");
// }



// 2.Calculate the electricity bill based on units consumed.
//     0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.

// let units = 320;
// if(units <= 100){
//     bill = units * 2;
//     console.log("Electricity bill is :",bill);
// }
// else if(units>100 && units<=200){
//     bill = units *3;
//     console.log("Electricity bill is :",bill);
// }
// else if(units > 200 && units <= 300){
//     bill = units * 5;
//     console.log("Electricity bill is :",bill);
// }
// else if(units > 300){
//     bill = units*7;
//     console.log("Electricity bill is :",bill);
// }
// else{
//     console.log("Wrong bill");
// }


// 3.Display the age category.
// Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.

// let age = 25;
// if (age < 13) {
//     console.log("Child");
// } else if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else if (age >= 20 && age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }



// 4.Calculate the discount based on shopping amount.
//     Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.

// let amount = 9000;
// if(amount < 1000){
//     discount = 0;
//     console.log("No discount",amount)
// }
// else if ( amount >= 1000 && amount <=4999){
//     discount = amount * (10/100);
//     finalAmount = amount - discount;
//     console.log("discount is : ",discount , "Final Amount is :", finalAmount)
// }
// else if ( amount >= 5000 && amount <=9999){
//     discount = amount * (20/100);
//     finalAmount = amount - discount;
//     console.log("discount is : ",discount , "Final Amount is :", finalAmount)
// }
// else if ( amount > 10000){
//     discount = amount * (30/100);
//     finalAmount = amount - discount;
//     console.log("discount is : ",discount , "Final Amount is :", finalAmount)
// }
// else{
//     console.log("Enter valid amount")
// }


// 5.Display the season based on the month number.
// 3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.

// let month = 7;
// if (month >= 3 && month <= 5) {
//     console.log("Spring");
// } else if (month >= 6 && month <= 8) {
//     console.log("Summer");
// } else if (month >= 9 && month <= 11) {
//     console.log("Autumn");
// } else if (month === 12 || month === 1 || month === 2) {
//     console.log("Winter");
// } else {
//     console.log("Enter a valid month number (1-12)");
// }


//  6.Check whether a given year is a Leap Year or not.
//     Condition 1: year % 400 == 0
//     Condition 2: year % 4 == 0 and year % 100 != 0

// let year = 2024;
// if(year % 400 == 0){
//     console.log("the year ", year," is a leap year")
// }
// else if(year %4 == 0 && year % 100 != 0){
//     console.log("the year ", year," is a leap year")
// }
// else{
//     console.log("the year ", year," is not a leap year")
// }


//--------------
//Nested If
//---------------





//1.Check whether a person is eligible to donate blood.
//     Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.

// let age = 20;
// let weight = 66;
// if(age >= 18 && age <=60){
//     if(weight > 50){
//         console.log("Person is eligible to donate blood by both age and weight");
//     }
//     else{
//         console.log("Person is not eligible to donate blood cause of age")
//     }
// }
// else{
//     console.log("Person is not eligible to donate blood")
// }


//2.Display the grade based on average only if the student has passed in all 4 subjects.

// 2.Display the grade based on average only if the student has passed in all 4 subjects. (nested if)

// let sub1 = 45;
// let sub2 = 60;
// let sub3 = 55;
// let sub4 = 70;
// let passMarks = 35;
// if (sub1 >= passMarks && sub2 >= passMarks && sub3 >= passMarks && sub4 >= passMarks) {
//     let average = (sub1 + sub2 + sub3 + sub4) / 4;
//     if (average > 90) {
//         console.log("Grade: O");
//     } else if (average > 80 && average <=90) {
//         console.log("Grade: A");
//     } else if (average > 70 && average <=80) {
//         console.log("Grade: B");
//     } else if (average > 60 && average <=70) {
//         console.log("Grade: C");
//     } else {
//         console.log("Grade: D");
//     }
// } else {
//     console.log("Fail - Not eligible for grade (must pass in all subjects)");
// }



// 3.Check whether a student is eligible for a scholarship.
//     Age should be above 18. If eligible by age, score should be above 86.

// let age = 20;
// let score = 87;
// if(age > 18){
//     if(score > 86){
//         console.log("Eligible for scholarship");
//     }
//     else{
//         console.log("Not eligible - score is not above 86");
//     }
// }
// else{
//     console.log("Not eligible - age is not above 18");

// }