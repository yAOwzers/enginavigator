import React from "react";
import ReactDOM from "react-dom";

//in a real world, instead of a single element, we will render an app component - root componenet for our children componenets
//basically rendering a tree of componenets 
const element = <h1> Hello World </h1>; //jsx expression, Babel will convert it to (React.createElement)
ReactDOM.render(element, document.getElementById('root')); //second arguement is where in the realDOM you want to render the element

// the module auto-refreshes  called : (hot module reloading
