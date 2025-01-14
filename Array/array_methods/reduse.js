let arr=[2,4,6,8,3,5,7,9];

let result=arr.reduce(function name(prev,curr) {
    return prev+curr;
    // return curr;
})
console.log(result);

let result_2=arr.reduce(function name(prev,curr) {
    return prev>curr?prev:curr;
},arr[0])
console.log("max:",result_2);

let result_3=arr.reduce(function name(prev,curr) {
    return prev<curr?prev:curr;
},arr[0])
console.log("min:",result_3);
