//creation of object
// let iPhone={
//     mobileName:"Iphone 16 pro max",
//     storage:256,
//     cost:115000

// };


//retreving the data from object
// console.log(iPhone)


//by using dot notation
//syntx 
//objectname.property name

// console.log("Mobile name ",iPhone.mobileName)
// console.log("Storage in gb ",iPhone.storage);
// console.log("Price ",iPhone.cost)



//UPDATING
//syntax 
//onbjectname.propertyName=ChangedValue

//before update
// console.log("before update ",iPhone.storage)

// //UPDATe
// iPhone.storage=516

// //after update
// console.log("After Update",iPhone.storage)


// console.log("before update ",iPhone.cost)
// //update
// iPhone.cost=150000
// console.log("after update",iPhone.cost)

// let iPhone={
//     mobileName:"Iphone 16 pro max",
//     storage:256,
//     cost:115000

// };


// //updating or adding new properties(key-values)
// //befor adding or updating
// console.log("Before adding or updating")
// console.log(iPhone)

// //updating or adding
// //object name.NEWpropertyname=value

// iPhone.color="black"
// iPhone.warrenty=true
// //after updating or adding
// console.log("After adding or updating")
// console.log(iPhone)




// //DELETING

// //deleting properties(key-values)
// //befor adding or updating
// console.log("Before deleting")
// console.log(iPhone)

// //delete
// //delete objectname.propertyname

// delete iPhone.warrenty
// //after updating or adding
// console.log("After deleting")
// console.log(iPhone)




// let laptop={
//     "my name":"hp pavilon",
//     "stor@ge":"256gb",
//     cost:62000
// }

//retriveing
// console.log(laptop["my name"]);//with spaces
// console.log(laptop["stor@ge"]);//with special characters



// let cost="price"//variable
// let laptop={
//     "my name":"hp pavilon",
//     "stor@ge":"256gb",
//     cost:62000//dynamic variable
//     //using normal variable with in an object as property name or key is called as dynamic variable
// }
// console.log(laptop["cost"])




let person={
    myName:"krishna sai",
    age:22,
    address:{
        village:"kallur",
        district:"khammam",
        state:"Telangana"
    },
}

// console.log(person.myName)
// //accessing nested object
// console.log(person.address)
// //syntax to retrive details from nested object
// //outerObjectName.inmerObjectNmae.innerPropertyNmae
// console.log(person.address.village)
// console.log(person.address.district)
// console.log(person.address.state)



//updating
// console.log(person.address)
// person.address.village="yerraboinapalli"
// console.log(person.address)


//DELETE

// console.log(person.address)
// delete person.address.district
// console.log(person.address)



