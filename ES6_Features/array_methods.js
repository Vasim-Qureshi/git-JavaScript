const arr=[2,4,6,8,9,7,5,3];
const multi_every_i=arr.map(num=>num*3);
console.log(multi_every_i);
const filter_even_num=arr.filter(num=>num%2==0)
console.log(filter_even_num);


const add_reduse=arr.reduce((acc,curr)=>acc+curr)
console.log(add_reduse);