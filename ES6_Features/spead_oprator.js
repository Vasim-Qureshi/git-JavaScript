const arr1=["name","email","contact"];
const arr2=["home","office","market"];
result=[...arr1,...arr2] //concat array in ES6
console.log(result);

const obj1={name:"vasim",class:10};
const expend_obj1={...obj1,email:"xyz@gmail.com"}; // expend object in ES6
console.log(expend_obj1);


//rest params in function come as a array
function rest_params(...num) {
    return num.reduce((previus,current)=>previus+current);
}
console.log(rest_params(1,2,3));
console.log(rest_params(3,5,6,7,8));
console.log(rest_params(9,8,6,5,4,4));


