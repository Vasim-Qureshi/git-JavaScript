function checkAge(age) {
    const promise= new Promise((resolve, reject) => {
        if (age>=18) {
            resolve("valid for vote")
        } else {
            reject("invalid for vote")
        }
    
    })
    return promise;
    
}
checkAge(70)

.then(function(response) {
    return response
})
.then(function(res) {
    console.log(res);
})
.catch(function (Err) {
    console.log(Err); 
})

console.log("programe completed");

