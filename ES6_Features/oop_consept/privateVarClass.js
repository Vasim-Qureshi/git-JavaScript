class Person {
    #name; // Private variable
    #age;  // Private variable
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    // Getter for name
    getName() {
      return this.#name;
    }
  
    // Getter for age
    getAge() {
      return this.#age;
    }
  
    // Setter for name
    setName(newName) {
      this.#name = newName;
    }
  
    // Setter for age
    setAge(newAge) {
      if (newAge > 0) {
        this.#age = newAge;
      } else {
        console.log('Age must be positive.');
      }
    }
  }
  
  // Subclass extending Person
  class Employee extends Person {
    constructor(name, age, id, position, salary) {
      // Call the parent class constructor
      super(name, age);
      this.id = id;
      this.position = position;
      this.salary = salary;
    }
  
    getDetails() {
      // Access private variables via getters
      return `Name: ${this.getName()}, Age: ${this.getAge()}, ID: ${this.id}, Position: ${this.position}, Salary: $${this.salary.toLocaleString()}`;
    }
  }
  
  // Example usage
  const employee = new Employee('Alice', 28, 102, 'Developer', 80000);
  console.log(employee.getDetails()); // Accessing private variables via getters
  
  // Updating private variables using setters
  employee.setName('Alice Johnson');
  employee.setAge(29);
  console.log(employee.getDetails());
  