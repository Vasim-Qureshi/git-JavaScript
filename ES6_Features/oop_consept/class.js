class Employee {
    constructor(id, name, position, department, salary) {
      this.id = id;
      this.name = name;
      this.position = position;
      this.department = department;
      this.salary = salary;
    }
  
    // Method to display employee details
    getDetails() {
      return `
        Employee ID: ${this.id}
        Name: ${this.name}
        Position: ${this.position}
        Department: ${this.department}
        Salary: $${this.salary.toLocaleString()}
      `;
    }
  }
  
  // Example usage
  const employee1 = new Employee(101, 'John Doe', 'Software Engineer', 'IT', 75000);
  console.log(employee1.getDetails());
  
  const employee2 = new Employee(102, 'Jane Smith', 'HR Manager', 'Human Resources', 85000);
  console.log(employee2.getDetails());
  