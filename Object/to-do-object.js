const phonebook=[];
function addPhone(uid,uname,uphone) {
    const obj={id:uid,name:uname,phone:uphone};
    phonebook.push(obj);
}

function getAllTodos() {
    console.log(phonebook);
}

addPhone(101,"alex",9023456789);
addPhone(101,"jems",9023456789);
addPhone(101,"piter",9023456789);

getAllTodos();