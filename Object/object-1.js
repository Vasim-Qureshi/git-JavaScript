let object={
    fname:"vasim",
    lname:"qureshi",
    class:"x",
    rollno: 450,
    age:35,
};

let arr=["ram","sing",34,"x",460];

let x = 0; 

function varUpdate(x) {
    x=10;
    return x;
}

function arrUpdate(x) {
    x[1]="sharma"
    return x;  
}

function objUpdate(x) {
    x.age=45; 
    return x;
}

console.log(x);

const result = varUpdate(x);
console.log(result);

const arrResult=arrUpdate(arr);
console.log(arrResult);

const objResult = objUpdate(object);
console.log(objResult);
