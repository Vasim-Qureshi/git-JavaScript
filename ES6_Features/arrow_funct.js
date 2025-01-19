const greeting= name=>console.log("welcome",name);
const add=(num1,num2) => num1+num2;
const calculet=(num1,num2)=>{
    const result=add(num1,num2);
    const multi= num1*num2;
    return result + multi;
}
greeting("vasim");
console.log(add(30,20));
console.log(calculet(5,10));
