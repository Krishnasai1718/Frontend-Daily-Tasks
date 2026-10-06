//1.Find the average of numbers from 1 to N.
    //Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.

// let n = 10;
// let sum =0;
// for(let i =1;i<=n;i++){
//     sum = sum+i;
// }
// let avg = sum/n;
// console.log("The average of first ",n," numbers is ",avg);



//2.Find the sum of squares of numbers from 1 to N.
   // Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².

// let n = 10;
// let sum =0;
// for(let i =1;i<=n;i++){
//     sum = sum+(i**2);
// }
// console.log("The sum of squares of first ",n," numbers is ",sum);


//3.Find the sum of cubes of numbers from 1 to N.
   // Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.

// let n = 10;
// let sum =0;
// for(let i =1;i<=n;i++){
//     sum = sum+(i**3);
// }
// console.log("The sum of cubes of first ",n," numbers is ",sum);



//4.Calculate the power of a number without using the ** operator.
   // Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.

// let base = 3;
// let power = 6;
// let result = 1;
// for(let i =1;i<=power;i++){
//     result*=base;
// }
// console.log("the base ",base," to the power ",power," is ",result)



//5.Display the first N terms of the Fibonacci series.
    //Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.

// let a =0;
// let b =1;
// let n = 10;
// for(let i =1;i<=n;i++){
//     console.log(a);
//     c=a+b;
//     a = b;
//     b =c;
// }


//6.Display the first N terms of the series:
    // 1, 1/2, 1/3, 1/4, ...
    // Example: If N = 4, display 1, 1/2, 1/3, 1/4.

// let n = 8;
// for(let i = 1; i <= n; i++){
//     if(i == 1){
//         console.log(i);
//     }
//     else{
//         console.log("1/" + i);
//     }
// }


// 7.Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.

// let n = 5;
// let num = 0;
// for(let i = 1; i <= n; i++){
//     num = num * 10 + 1;
//     console.log(num);
// }


//8.Display the first N terms of the series:
    // 1, 3, 9, 27, 81, ...
    // Each term is obtained by multiplying the previous term by 3.


// let n = 7
// let num = 1
// for(let i =1;i<=n;i++){
//     console.log(num)
//     num = num*3
// }



//9.Print all numbers from 10 to 150 that are divisible by both 3 and 5

// for(let i =10;i<=150;i++){
//     if(i%3==0 && i%5==0){
//         console.log("the number ",i," is divisible by both 3 and 5 ")
//     }
// }



//10.Count how many numbers from 200 down to 50 are divisible by 7

// let count =0;
// for(let i =200;i>=50;i--){
//     if(i%7==0){
//         count+=1
//     }
// }
// console.log("the count of numbers that are divisible by 7 between 200 down to 50 is ",count)


//11.Print numbers from 120 down to 20 that are not divisible by 5
// for(let i=120;i>=20;i--){
//     if(i%5!=0){
//         console.log(i)
//     }
// }


//12.Find the average of all even numbers in the range from 10 to 100

// let sum = 0
// let count=0
// for(let i=10;i<=100;i++){
//     if(i%2==0){
//         sum =sum+i
//         count+=1
//     }
// }
// let avg = sum/count
// console.log("the average of even numbers between 10 and 100 is ",avg)


//13.Find the average of all factors of a given number.

// let n =6;
// let sum = 0
// count = 0
// for(let i =1;i<=n;i++){
//     if(n%i==0){
//         sum+=i
//         count+=1
//     }
// }
// let avg = sum/count
// console.log("the average of all the factors of number ",n," is ",avg)