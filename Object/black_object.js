const employee= new Object();
employee.name="vasim qureshi";
employee.salary=50000;
employee.id="E-222"
employee.display= function() {
    console.log(this.name);
    console.log(this.salary);
    console.log(this.id);
}
employee.display();