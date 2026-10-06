// let person = new Object()

// //retriving or accessing
// // console.log("before adding")
// // console.log(person)


// //adding the data
// person.name="Krishna";
// person["age"]=22

// //accessing
// console.log("after adding")
// console.log(person)

// //updating

// person.address="Hyderabad"
// person["age"]=23
// console.log(person)
// console.log(person.age)


// //delete
// delete person.address

// console.log("after deleting")
// console.log(person)

//dynamic syntax property
//using variable name as a property name by using square brackets is called as dynamic syntax property
// let key="name";
// let person={
//     age:22,
//     [key]:"krishna"
// }
// console.log(person)


//normal way of shorter property syntax

// let fname="hero";
// let age="21"
// let person={
//     fname:fname,
//     age:age
// }
// console.log(person)


//shorter property syntax


// let fname="hero";
// let age="21";
// let gender="male";
// let person={
//     fname,
//     age,
//     gender
// }
// console.log(person)




//function inside object

// function displayObject(){
//     let f1Team={
//         team:"Ferrari",
//         driver:"lewis hamilton",
//         wins:"7 times world champions"
//     }
//     console.log("F1 team :",f1Team.team)
//     console.log("F1 team driver :",f1Team["driver"])
//     console.log("driver wins :",f1Team.wins)
// }
// displayObject()



// function displayObject(){
//     let f1Team={
//         team:"Ferrari",
//         driver:"lewis hamilton",
//         wins:"7 times world champions"
//     }
//     return f1Team
// }
// let f1=displayObject()
// console.log("F1 team :",f1.team)
// console.log("F1 team driver :",f1["driver"])
// console.log("driver wins :",f1.wins)


let person={
    name:"hero",
    walk:function walking(){
        console.log("Is walking")
    },
    talk:function(){
        console.log("is talking")
    },
    shout:()=>{
        console.log("Is shouting")
    }
}
person.walk()
person["talk"]()
person.shout()