
const readline = require('readline');
const fs= require('fs');
/*-------------Lecture-04-------------
Reading Input and writing input

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter you name : ", (name)=>{
  console.log("You entered : ",name);
   rl.close(); 
})
rl.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);   
})
*/

/*
-------------Lecture-05------------
Reading and writing file

./= this means it incates current directory . example ./  means NODE.JS folder
*/

// Reading and write file Syncronously
// const read_data=fs.readFileSync('./File/input.txt','utf-8')
// console.log(read_data);

// const write_data=`Data write in output.txt file : ${read_data}\n Date created ${new Date()}`
// fs.writeFileSync('./File/output.txt',write_data);


/*
----------------------Lecture-06----------------------
Asynchronous nature of Node JS 
*/
// Main function
// const mainFunction = (callback) => {
//     setTimeout(() => {
//         callback([2, 3, 4]);
//     }, 500)
// }

// // Add function
// const add = (array) => {
//     let sum = 0;
//     for (let i of array) {
//         sum += i;
//     }
//     console.log(sum);
// }

// // Calling main function
// mainFunction(add);


// ---------------Callback Function Example---
/*
the code is executed synchronously. The sayName() function is passed as an argument to the greet() function.

The setTimeout() method executes the greet() function only after 2 seconds. However, the sayName() function waits for the execution of the greet() function.
*/
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }


// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);



//---------------- program to display time every 3 seconds-----------
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 1000);
// }

// // calling the function
// showTime();

// --------------program to stop the setTimeout() method------------

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');





