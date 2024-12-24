let arr=[
    ["rahul",12,"v",450,true],
    ["ashok",13,"vi",400,true],
    ["lalit",14,"vii",550,true,{}],
    ["shoyab",15,"viii",500,true],
    ["ravi",16,"ix",600,true]
];

// accessing multi dimentional array
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    for (let i = 0; i < element.length; i++) {
        console.log(element[i]);  // for print all outer array eliments
    }
    console.log(arr[index]); // for print all outer array eliments
    console.log("inner array lenght ="+element.length); //for showing inner array lenght
}
console.log("outer array lenght ="+arr.length);
 // output => 5

console.log(arr.at(2));
 //ouput => [ 'lalit', 14, 'vii', 550, true, {} ]

console.log(arr[0].find(age => age > 10));
 //output => 12

console.log(arr[1].find(rollNum => rollNum > 300));
 //output => 400

arr.forEach(element => console.log('forEach:', element));
 //output => show all inner array from outer array.
 
console.log("join array : ",arr[1].join("-"));
 //output => join array :  ashok-13-vi-400-true

