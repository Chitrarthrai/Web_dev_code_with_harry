console.log("This is Tut_53 Js");

//function and its parameter 
function greet(name , greettext = "This is Greeting from JavaScript"){   
    //passed value has suprimessy function defined value has no effect
    //it is called default value 
    let name1 = "Name1"; //local variable no effect on global variable 
    console.log(greettext +" "+ name);
    console.log(name + " is the good boy");
}

let name1 = "Chitrarth"; //global variable 
let name2 = "Shivam";
let name3 = "Ravinder";
let name4 = "Lokendra";
let name5 = "Yogesh";
let greettext1 = "Good Morning";
// console.log(name1 + " is the good boy");
// console.log(name2 + " is the good boy");
// console.log(name3 + " is the good boy");
// console.log(name4 + " is the good boy");
greet(name1, greettext1); 
greet(name2, greettext1);
greet(name3, greettext1);
greet(name4, greettext1);

let returnvalue = greet(name5);
console.log(returnvalue);
//default value + name5

function sum(a, b, c){
    let d = a + b + c;
    return d;
    //after return nothing will be excuted (called unrechable code)
    //console.log("This is returned");
}

let sumreturn = sum(1, 2, 3);
console.log(sumreturn);