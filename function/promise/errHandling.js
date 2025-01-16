function divide(num1,num2) {
    if (num2==0) {
        throw new Error("cannot divide by 0");
        
    }
    return num1/num2;
}

try {
    console.log("connection open");
    const result=divide(45,6);
    console.log(result);
} catch (error) {
    console.log("Error occured :",error.message);
}finally{
    console.log("close connection"); 
};