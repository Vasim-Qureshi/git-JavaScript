let data = "A"
let myData=data.charCodeAt(0);//65 == A in binari system.
let result=" " ;

function alfa_pattern(row) {
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            result+=String.fromCharCode(myData)+" ";
            myData+=1;
            if (String.fromCharCode(myData)==="[") {
                myData=65;
            }
            
        }
        console.log(result);   
    } 
}
alfa_pattern(10);