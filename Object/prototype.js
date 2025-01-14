//constructor function
class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    display() {
        console.log("Id:" + this.id);
        console.log("Name:" + this.name);
        console.log("Email:" + this.email);
    }
}

const st1= new Student(1,"alex","alex@gmail.com");
const st2= new Student(2,"jems","jems@gmail.com");

st1.display();
st2.display();
