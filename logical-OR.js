let a = 5;
let b=6;
let c = (a<b) || (a===b);
let d = (a<b) || (a!==b);
let e = (a>b) || (a!==b);
let f = (a>b) || (a===b);

console.log("condition C is ", c);
console.log("condition d is",d );
console.log("condition e is",e );
console.log("condition f is",f );

document.getElementById("demo-1").innerHTML= "condition c = " + c;
document.getElementById("demo-2").innerHTML= "condition d = " + d;
document.getElementById("demo-3").innerHTML= "condition e = " + e;
document.getElementById("demo-4").innerHTML= "condition f = " + f;