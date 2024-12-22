let data=[];
function fetchData(callback) {
    //fetch data from server
    setTimeout(() => {
        console.log("data fetch successfully");
        data=[1,2,3,4,5,6,7];
        callback(); // try to make it function syncronus
    }, 3000);
};

function display() {
    console.log("Display Data =",data);
};

fetchData(display);