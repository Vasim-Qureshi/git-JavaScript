const array=[4,5,6,7,8,9,3,2,6,7];
// find out max number in array
let max=array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i]>max) {
        max = array[i];
    }; 
}
console.log("max number is",max);