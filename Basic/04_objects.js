//singleton


//object literals

const mySym = Symbol("Key1")


const jsUsr = {
    name : "Rahul",
    "full name ": "Rahul Roy",
    age : 25,
    mySym : "Mykey1",
    location :"Pune",
    email : "abc@cctech.co.in",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUsr.name);
// console.log(jsUsr["full name "]); // only dot not acceptable  so [] notation used

// console.log(jsUsr.mySym);

// console.log(typeof jsUsr.mySym); // USE AS STRING but want as symbol then use as [mySym] insteed of mySym value no difference


// jsUsr.email = "rahul@google.com"

// Object.freeze(jsUsr)

// jsUsr.email = "rahul@cctceh.com"

// console.log(jsUsr);

//function use

// jsUsr.greating = function(){
//     console.log("hello lets test");
    
// }

// jsUsr.greatingTwo = function(){
//     console.log(`okay the name is ${name}`);
    
// }

// console.log(jsUsr.greating());

// console.log(jsUsr.greatingTwo())


//const tinderUser = new Object() //singleton obj

//console.log(tinderUser);


const tinderUser1 ={}  // non Singleton Object

 tinderUser1.id ="123abc";
 tinderUser1.name = "John"
 tinderUser1.isLoggedIn = false

//console.log(tinderUser1);

const regularUser ={
    email : "john@gmail.com",
    fullname :{
        userfullname:{
            firstname :"Rahul",
            lastname : "Roy"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const object1 = { 1: "a" , 2: "b"}
const object2 = { 3: "a" , 4: "b"}
const obj4 =    { 5:"a"   , 6: "b"}

//const object3 = {object1,object2}

//const obj3 =Object.assign({},object1,object2,obj4)

const obj3 ={...object1 ,...object2 ,...obj4}

//console.log(obj3)


//Data coming from the DB


const users = [
    {
        id : 1,
        email : "rahul@gmail.com"
    },
    {
        id : 2,
        email : "rahul2@gmail.com"
    },
    {
        id : 3,
        email : "rahul3@gmail.com"
    },
    {
        id : 4,
        email : "rahul4@gmail.com"
    }
]

users[1].email
// console.log(tinderUser1);

// console.log(Object.keys(tinderUser1));

// console.log(Object.values(tinderUser1));

// console.log(tinderUser1.hasOwnProperty('isLoggedIn'));



// structuring and destructing

const course ={
    CourseName : "JS",
    price : "999",
    courseInstructor: "Roy"
}

//course.courseInstructor    // to much repetation

const {courseInstructor :instructor}=course

//console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "rahul",
//     "coursename" : "js",
//     "price" : "free"
// }


//randomuser
//jasonformatter


 






