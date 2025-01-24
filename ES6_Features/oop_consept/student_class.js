class Student{
    constructor(id,name,address,country){
        this.id=id;
        this.name=name;
        this.address=address;
        this.country=country;
    }
    getDetails(){
        console.log("--------------"); 
        console.log(`id : ${this.id}`);
        console.log(`name : ${this.name}`);
        console.log(`address : ${this.address}`);
        console.log(`country : ${this.country}`);
    }
}
const s1= new Student(1,"vipul","shastry nagar","india");
const s2= new Student(2,"manish","ram nagar","usa");
const s3=new Student(3,"ravi","bajaj nagar","china")

s1.getDetails();
s2.getDetails();
s3.getDetails();