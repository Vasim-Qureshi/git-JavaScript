const array=[1,"vasim", true,undefined,null,{},[]];
console.log(array);//printing as object
let result='';
for (const data in array)
    result+=array[data]
console.log(result);//print as string