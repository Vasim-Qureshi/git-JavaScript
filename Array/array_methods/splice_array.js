const arr=[3,5,6,7,8,9];
// orignal array
console.log(arr);

arr.splice(3,0,3,1);
// first arg index num where start slplice method
// seconnd arg how many element will delete from index num 3 in array
// thurd and fourth args will insert in array from index num 3 
console.log(arr);

arr.splice(3,2,6);
// first arg index num where start slplice method
// second arg how many element will delete from index num 3 in array
// thurd args will insert in array from index num 3 
console.log(arr);

arr.splice(1,1);
// first arg index num where start slplice method
// second arg how many element will delete from index num 3 in array
console.log(arr);
