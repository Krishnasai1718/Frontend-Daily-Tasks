// named function without input and without return

// function sayHello(){
//     console.log("Hello")
// }
// sayHello()

//// b. add three numbers
// function addThree(){
//    let n1=1;
//    let n2 =3;
//    let n3 = 5;
//    let sum = n1+n2+n3
//    console.log(sum)
// }
// addThree()



////c. name attach
// function nameeed(){
    
//     let name="Krishna"
//     console.log("Hello ! good morning",name)
// }
// nameeed()



//named function WITH input and WITHOUT return

// function displayName(fname){
//     console.log("My name is ",fname)
// }
// displayName("Krishna")


////// b. prime or not

// function primeORnot(n){
//     let i=1
//     let count=0
//     while(i<=n){
//         if(n%i==0){
//             count++
//         }
//         i++
//     }
//     if(count ==2){
//         console.log(n,"is prime")
//     }
//     else{
//         console.log(n,"is not a prime")
//     }
// }
// primeORnot(13)
// primeORnot(20)
// primeORnot(19)
// primeORnot(33)


////// c. avg of 3num

// function avgThree(a,b,c){
//     let avg= (a+b+c)/3
//     console.log(avg)
// }
// avgThree(1,2,3)


//named function WITHOUT input and WITH return

// function displayName(){
//     let fname="hero"
//     return fname;
// }
// // let myname =displayName()
// // console.log(myname)
// console.log(displayName())



////b.fact of 5

// function fact5(){
//     let fact=1
//     let n=5
//     let i=1
//     while(i<=n){
//         fact=fact*i
//         i++
//     }
//     return fact
// }
// // console.log(fact5())
// let factorial = fact5()
// console.log(factorial)



// named function WITH input and WITH return

// function displayName(fname){
//     return fname
// }
// let myName =displayName("hero")
// console.log(myName)


/////b. odd or even
function evenodd(n){
    if(n%2==0){
        return n + "is even"
    }
    else{
        return n +"is Odd"
    }
}
console.log(evenodd(2))