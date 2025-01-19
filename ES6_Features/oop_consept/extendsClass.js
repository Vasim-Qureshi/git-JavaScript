class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
}
  
// Subclass extending Person
class Employee extends Person {
// No constructor here, so the parent class's constructor is used.
}

// Example usage
const employee = new Employee('Bob', 25);
console.log(employee.getInfo()); // Output: Name: Bob, Age: 25  