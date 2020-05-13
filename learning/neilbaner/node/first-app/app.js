// console.log(); // console is global object, available in any file

// setTimeout();// call a function after a delay
// clearTimeout();

// setInterval(); // call a function repeatedly after a delay
// clearInterval(); // stop calling the function

// // window.console.log(); // no window object in node, but in browser, everything is a part of 

// global.console.log(); // everything is under the global object in node

var message = ''; // this is not global, only part of this file

console.log(global.message);