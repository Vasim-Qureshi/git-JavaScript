const array=[3,5,6,8,10,33,44,45];
const evenArray=[];
const oddArray=[];

for (const data of array) {
    if (data%2==0) 
        evenArray.push(data);  
    else
        oddArray.push(data);
}
console.log(array);// original array
console.log(evenArray) //evenArray will showing.
console.log(oddArray); //odd array will Showing.
