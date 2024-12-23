function basic(){
    console.log("R");
    console.log("R");
}
 //basic this is refence and basic() execution

//basic()

// function addNumber(num1, num2){

//     console.log(num1 + num2);

// }

function addNumber(num1, num2){

  // let result = num1 + num2
   return   num1 + num2

}

const result = addNumber(3,5)

//console.log("Result :" ,result);



function cal(...num1) // takes all the value in the array
{
    return num1
}
//console.log(cal(200,45,677,6555));

function cal1( val1,val2,...num1) // op val1 and val2 are  200,45 and rest in the array
{
    return num1
}

//console.log(cal1(200,45,677,6555));



//=-=============================================================================

//                     SCOPE

//this will work becasue the function is decraled here for even though calling from above will work
//console.log((addone(5)));

function addone(num){
    return num + 1
}

//console.log((addone(5)));


// const addTWO= function(num){
//     return num+2
// }
// console.log((addTWO(5))); // THIS  is working but 

//console.log((addTWO(5))); // THIS  is not working  because we are storing 

const addTWO= function(num){
    return num+2
}


//-------------------------------arrow function-------------------------------

//this refer the current context

const myUser = {
    username : "Rahul",
    price : 999,
    welcomeMessage : function(){
        console.log(`hey i am the ${this.username}`);
       //console.log(this)
    }
}

// myUser.welcomeMessage()
// myUser.username = "Rohan" // chnage the context here
// myUser.welcomeMessage()

