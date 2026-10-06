//declaration

// let sayHello=function(){
//     console.log("Annonymous:Hello hero")
// }
// //invoking
// sayHello()



//annonymous function WITHOUT input and WITHOUT return

//1. smallest of three

// let smallest =function(){
//     let a=20;
//     let b=10;
//     let c=25;
//     if(a<b && a<c){
//         console.log(a," is the smallest")
//     }
//     else if(b<a && b<c){
//         console.log(b," is the smallest")
//     }
//     else{
//         console.log(c," is the smallest")
//     }
// }
// smallest()


//annonymous function WITH input and WITHOUT return

// let displayName=function(name){
//     console.log("my name is :",name)
// }
// displayName("Krishna")


//1.palindrome

// let palindrome= function(num){
//     let temp = num;
//     let rev=0
//     while(num>0){
//         let ld=num%10
//         rev = rev *10+ld;
//         num= parseInt(num/10)
//     }
//     if(temp == rev){
//         console.log(temp," is palindrome")
//     }
//     else{
//         console.log(temp," is not a palindrome")
//     }
// }
// palindrome(121)



//annonymous function WITHOUT input and WITH return

// let sayHello=function(){
//     return "Hello"
// }
// console.log(sayHello())


//1.Leap year

// let leapYear = function(){
//     let year = 2024
//     if(year %4==0 &&year%100!=0 || (year%400==0)){
//         return year+" is a leap Year"
//     }
//     else{
//         return year+" is not a leap Year"
//     }
// }
// console.log(leapYear())



//annonymous function WITH input and WITH return
// let displayName=function(name){
//     return "my name is "+name
// }
// console.log(displayName("hero"))


//1. perfect number

// let perfect = function(num){
//     let sum =0
//     for(let i=1;i<num;i++){
//         if(num%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==num){
//         return num+" is a perfect number"
//     }
//     else{
//         return num+" isnot  a perfect number"
//     }
// }
// console.log(perfect(6))