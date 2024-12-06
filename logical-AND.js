let A = 5;
let B = 6;
let C = (A<B) && (A===B);
let D = (A<B) && (A!==B);
let E = (A>B) && (A!==B);
let F= (A>B) && (A===B);

// console.log("condition C is ", c);
// console.log("condition d is",d );

document.getElementById("demo-5").innerHTML= "condition C = "+ C;
document.getElementById("demo-6").innerHTML= "condition D = "+ D;
document.getElementById("demo-7").innerHTML= "condition E = "+ E;
document.getElementById("demo-8").innerHTML= "condition F = "+ F;