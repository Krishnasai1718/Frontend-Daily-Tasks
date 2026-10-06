//Sum of Prime Numbers
//Find the sum of all prime numbers between 20 and 150.

// let sum=0
// for(let j=20;j<=150;j++){
//     let count=0
//     let n=j
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         sum=sum+n
//     }
// }
// console.log("sum of prime numbers between 20 to 150 is ",sum)

// Average of Perfect Numbers
// Find the average of all perfect numbers between 1 and 1000.

// let total =0
//  let count = 0;
// let avg = 0;
// for (let j = 1; j <= 1000; j++) {
//   let n = j;
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       sum = sum + i;
//     }
//   }
//   if (sum == n) {
//     count++
//     total = total+n
//   }
// }
// avg = total/count
// console.log(avg)

// Leap Years in a Range (Not Nested Loop Logic)
// Print all leap years between 1900 and 2026.
// for (let j = 1900; j <= 2026; j++) {
//   let year = j;
//   if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//     console.log(year);
//   }
// }

// Palindrome Numbers
// Print all palindrome numbers between 100 and 500.

// for (let j = 100; j <= 500; j++) {
//   let n = j;
//   let temp = n;
//   let res = 0;
//   while (n > 0) {
//     res = res * 10;
//     res = res + (n % 10);
//     n = parseInt(n / 10);
//   }
//   if (res == temp) {
//     console.log(res);
//   }
// }

// Digit Sum = 10
// Print all numbers between 120 and 850 whose digit sum is exactly 10.

// for (let j = 120; j <= 850; j++) {
//   let n = j;
//   let temp = n;
//   let sum = 0;
//   while (n > 0) {
//     let ld = n % 10;
//     sum = sum + ld;
//     n = parseInt(n / 10);
//   }
//   if (sum == 10) {
//     console.log(temp);
//   }
// }

// Pairs with Target Sum
// Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.

// for(let j = 1;j<=50;j++){
//     for(let i=j+1;i<=50;i++){
//         if(i+j==30){
//             console.log(i,j)
//         }
//     }
// }

// Exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors.

// for (let j = 10; j <= 300; j++) {
//   let count = 0;
//   let n = j;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   if (count == 3) {
//     console.log(n);
//   }
// }

// Prime Factors of every number between 20 and 50
// for (let num = 20; num <= 50; num++) {
//     let n = num;

//     for (let d = 2; d * d <= n; d++) {
//         while (n % d === 0) {
//             console.log("prime factors of number ",num)
//             console.log(d)
//             n = n / d;
//         }
//     }

//     if (n > 1) {
//         console.log(n)
//     }
// }

// Armstrong Numbers
// Print all Armstrong numbers between 100 and 999.

// for (let j = 100; j <= 999; j++) {
//   let n = j;
//   let sum = 0;
//   let temp = n;
//   while (n > 0) {
//     let ld = n % 10;
//     sum = sum + ld ** 3;
//     n = parseInt(n / 10);
//   }
//   if (sum == temp) {
//     console.log(sum);
//   }
// }


// Maximum Factors
// Find the number between 50 and 150 that has the maximum number of factors.
//let high = 0
// let max =0
// for(let j=50;j<=150;j++){
//     let n =j
//     let count = 0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(max<count){
//         max=count
//         high = n
//     }
// }
// console.log("number = ",high,"no of factors = ",max)