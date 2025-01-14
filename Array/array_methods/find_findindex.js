let arr=[2,4,6,8,5,6,7];
let result=arr.find(function (value) {
    return value==5
});
if (result) {
    console.log("result is",result);
} else {
    console.log("result not found",result);
};

let result_2=arr.findIndex(function (value) {
    return value==5
});
if (result_2!=-1) {
    console.log("index num is",result_2);
} else {
    console.log("index num not found",result_2);
}
