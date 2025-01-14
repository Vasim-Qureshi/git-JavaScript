let arr =[2,4,5,6,7,8,9,3];

let res_1=arr.every(function name(value) {
    return value > 1 
})

let res_2=arr.some(function name(value) {
    return value > 9
})

console.log(res_1); // check every or all elements in arr is true or false by condition
console.log(res_2); // check some elements in arr is true or false by condition
