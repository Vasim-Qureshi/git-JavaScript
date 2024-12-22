for (let i = 1; i <= 3; i++) {
    setTimeout(
        function () {
            console.log('index = '+i+' second-index = '+i); //this is templet string
        },i*1000
    );
}

for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(() => {
            console.log('index = '+index+' second-index = '+index);
        }, index*5000);
    })(index);
}