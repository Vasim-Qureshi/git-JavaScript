const array=[4,6,7,3,8,9,2,9,5,6];
// find sum and average
let total = 0;
for (const num of array) {
    total+=num; 
}
console.log('sum is ', + total);
const avg = total/array.length;
console.log(avg);