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
    constructor(name, age, id, position, salary) {
      // Call the parent class constructor with `super`
      super(name, age);
      this.id = id;
      this.position = position;
      this.salary = salary;
    }
  
    // Method to display employee details
    getDetails() {
      return `${this.getInfo()}, ID: ${this.id}, Position: ${this.position}, Salary: $${this.salary.toLocaleString()}`;
    }
  }
  
  // Example usage
  const employee = new Employee('John Doe', 30, 101, 'Software Engineer', 75000);
  console.log(employee.getDetails());
  