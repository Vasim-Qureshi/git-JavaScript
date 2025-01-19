class Person{
    constructor(parameters) {
        
    }
}
class Employee extends Person {
    constructor(parameters) {
        super(); // for using parrent class var
    }
    getDetail(){
        super.getDetail(); //for using parrent class var
    }
}

class SecondEmployee extends Employee {
    constructor(parameters) {
        
    }
}