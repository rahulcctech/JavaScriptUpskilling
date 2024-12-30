// function basic(){
//     console.log("R");
//     console.log("R");
// }
 //basic this is refence and basic() execution

//basic()

// function addNumber(num1, num2){

//     console.log(num1 + num2);

// }

// function addNumber(num1, num2){

//   // let result = num1 + num2
//    return   num1 + num2

// }

// const result = addNumber(3,5)

//console.log("Result :" ,result);



// function cal(...num1) // takes all the value in the array
// {
//     return num1
// }
//console.log(cal(200,45,677,6555));

// function cal1( val1,val2,...num1) // op val1 and val2 are  200,45 and rest in the array
// {
//     return num1
// }

//console.log(cal1(200,45,677,6555));



//=-=============================================================================

//                     SCOPE

//this will work becasue the function is decraled here for even though calling from above will work
//console.log((addone(5)));

// function addone(num){
//     return num + 1
// }

//console.log((addone(5)));


// const addTWO= function(num){
//     return num+2
// }
// console.log((addTWO(5))); // THIS  is working but 

//console.log((addTWO(5))); // THIS  is not working  because we are storing 

// const addTWO= function(num){
//     return num+2
// }


//-------------------------------arrow function-------------------------------

//this refer the current context

// const myUser = {
//     username : "Rahul",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`hey i am the ${this.username}`);
//        //console.log(this)
//     }
// }

// myUser.welcomeMessage()
// myUser.username = "Rohan" // chnage the context here
// myUser.welcomeMessage()


// function chai(){
//     let username ="Rahul"
//     console.log(this.username);
    
// }
// chai()

// const chai =function (){
//     let username ="Rahul"
//     console.log(this.username);
    
// }
// chai()

// const chai =  () => {
//     let username ="Rahul"
//     console.log(this.username); 
// }
// chai()

//===============arrow function

// const addTwoNumber = (num1,num2) => {
//     return num1+ num2
// }

// const addTwoNumber=(num1 , num2)=> num1+num2

// const addTwoNumber=(num1 , num2)=> (num1+num2)

// const addTwoNumber=(num1 , num2)=> (num1+num2)

// const addTwoNumber=(num1 , num2)=> ({username : "rahul"})

//  console.log(addTwoNumber(3,4))


//{} to write the return keyword  explecite
//() to need to write the return  implecite return



// for example

//const myArray=[3,5,12,6,7]

//myArray.forEach(function(){}) normal function

//1)myArray.forEach( () => {} ) array function
//2)myArray.forEach( () => () s) array function

//---------Immedatily Invokked func expression
// global scope k pollution se problem hota hai and  usko hatane k lie we use

(function DB(){
    //named IFEE
    console.log(`DB Connected`);   
})();

//IFEE WITH array function OR UNnnamed IFEE 
//Write two IFEE with ;

( (name)=>{
    console.log(`DB removed ${name}`);
})("Rahul")


//=========================  Call Stack in JavaScript===============================

//  JS is single thread

//  {} --> Global Eexecution context
//     --> Function Eexecution context
//     --> Eval Eexecution context

//  {} -------> Memory Creation phase
//     ---------> Execution phase
// global execution context ka kaam hone pe it will delete
// new function create new variable thread and execution thread

