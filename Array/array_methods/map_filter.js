let arr=[1,4,5,7,8,9,4];

let obj=[{name:"vasim",id:50},{name:"rahul",id:60},{name:"parvez",id:80},];

let newArr=arr.map(function(value) {
    return value*3;
})
let evenArr_map=arr.map(function(value) {
    return value%2===0
})

let evenArr_filter=arr.filter(function(value) {
    return value%2===0
})

console.log(arr); // return origenal array
console.log(newArr); // return number newArr that multiply by 3 from arr.
console.log(evenArr_map); // return if even that true or not even that false .
console.log(evenArr_filter); // return even number of arr.

let obj_map=obj.map(function (value) {
    return value.name +" "+"qureshi";
})
console.log(obj_map);
