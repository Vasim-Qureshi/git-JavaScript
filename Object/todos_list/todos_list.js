const profiles=[];
function save() {
    const input = document.getElementById("input");
    const value=input.value;
    profiles.push(value);
    input.value="";
    display(); 
};
function display() {
    const ul = document.getElementById("ul");
    for (const profile of profiles) {
        let list=`<li>${profile}</li>`;
    }
    ul.innerHTML= this.list;
}