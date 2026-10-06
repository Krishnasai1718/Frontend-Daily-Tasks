// 1. Without Input → Without Return

//a.armstrong 

// class Armstrong {
//   static find() {
//     for (let n = 1; n <= 500; n++) {
//       let temp = n;
//       let sum = 0;
//       while (temp != 0) {
//         let ld = temp % 10;
//         sum += ld **3
//         temp = parseInt(temp / 10);
//       }
//       if (sum == n) {
//         console.log(n);
//       }
//     }
//   }
// }
// Armstrong.find();

//b.pattern

// class Pattern {
//   static print() {
//     for (let i = 1; i <= 5; i++) {
//       let output = "";
//       for (let j = 1; j <= i; j++) {
//         output += i;
//       }

//       console.log(output);
//     }
//   }
// }
// Pattern.print();


//2. With Input → Without Return 
//a.Perfect Number

// class Perfect {
//   static check(n) {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//       if (n % i == 0) {
//         sum += i;
//       }
//     }
//     if (sum == n) {
//       console.log("Perfect Number");
//     } else {
//       console.log("Not a Perfect Number");
//     }
//   }
// }
// Perfect.check(28);
// Perfect.check(10);


//b.Frequency of Digits

// class Frequency {
//   static find(n) {
//     for (let i = 0; i <= 9; i++) {
//       let temp = n;
//       let count = 0;
//       while (temp != 0) {
//         let ld = temp % 10;
//         if (ld == i) {
//           count++;
//         }
//         temp = parseInt(temp / 10);
//       }
//       if (count > 0) {
//         console.log(i, "→", count);
//       }
//     }
//   }
// }
// Frequency.find(122334);


// 5. Without Input → With Return 
//a.Sum of Primes

// class PrimeSum {
//   static calculate() {
//     let sum = 0;
//     for (let n = 20; n <= 100; n++) {
//       let count = 0;
//       for (let i = 1; i <= n; i++) {
//         if (n % i == 0) {
//           count++;
//         }
//       }
//       if (count == 2) {
//         sum += n;
//       }
//     }
//     return sum;
//   }
// }
// console.log(PrimeSum.calculate());

//b.Count Strong Numbers

// class Strong {
//   static count() {
//     let countStrong = 0;
//     for (let n = 1; n <= 500; n++) {
//       let temp = n;
//       let sum = 0;
//       while (temp != 0) {
//         let ld = temp % 10;
//         let fact = 1;
//         for (let i = 1; i <= ld; i++) {
//           fact *= i;
//         }
//         sum += fact;
//         temp = parseInt(temp / 10);
//       }
//       if (sum == n) {
//         countStrong++;
//       }
//     }
//     return countStrong;
//   }
// }
// console.log(Strong.count());


//4.7. With Input → With Return
//a. Palindrome

// class Palindrome {
//   static check(n) {
//     let original = n;
//     let rev = 0;
//     while (n != 0) {
//       let ld = n % 10;
//       rev = rev * 10 + ld;
//       n = parseInt(n / 10);
//     }
//     if (original == rev) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(Palindrome.check(121));
// console.log(Palindrome.check(123));
// console.log(Palindrome.check(1221));



//b.Second Largest Digit
// class SecondLargest {
//   static find(n) {
//     let largest = 0;
//     let second = 0;
//     while (n > 0) {
//       let ld = n % 10;
//       if (ld > largest) {
//         second = largest;
//         largest = ld;
//       } else if (ld > second && ld != largest) {
//         second = ld;
//       }
//       n = parseInt(n / 10);
//     }
//     return second;
//   }
// }
// console.log(SecondLargest.find(583927));