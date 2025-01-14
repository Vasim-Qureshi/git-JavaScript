let array=[1,2,5,6,7];

array.forEach(element => {
    console.log(element);
});

let obj = [{name:"vasim",id:55},{name:"hari",id:66},{name:"ravi",id:88}];
obj.forEach(element => {
    console.log(element.name,element.id);
});

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
