
const body = document.querySelector("body");
const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");
const btn_4 = document.getElementById("btn-4");
const btn_5 = document.getElementById("btn-5");

btn_1.addEventListener("click", function() {
    prompt("do you want to change btn-1 name in to Button-1, if yes then press ok");
});

btn_1.addEventListener("click", function() {
    document.getElementById("btn-1").innerHTML="Button-2";
});

btn_2.addEventListener("dbclick", function() {
    prompt("btn-2 was click");
});

btn_3.addEventListener("click", function(event) {
    btn_3.textContent = `Click count: ${event.detail}`;
    prompt("btn-3 was click");
});

btn_4.addEventListener("click", function() {
    prompt("btn-4 was click");
});

btn_5.addEventListener("click", function() {
    prompt("btn-5 was click");
});

