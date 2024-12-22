function outerFunc(outer) {
    return function innerFunc(inner) {
        console.log("outer var = ",outer);
        console.log("inner var = ",inner);
    }
    
}
const closurFunc = outerFunc("car");
closurFunc("bus");