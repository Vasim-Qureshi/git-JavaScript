var i = 2;
while(i<=20){
    console.log(i);
    document.getElementById("demo-1").innerHTML=i;
    i=i+2;
}
document.getElementById("demo-1").innerHTML="loop complited"+i;
var k=2;
for (let j = 2; j <= 20; j+=2) {
    if(j % 4 === 0)
        console.log(j+"  "+"me ho doon");
    else
        console.log(j+"  "+"me ho koon");
}
console.log(k);