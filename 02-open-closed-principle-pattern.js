class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        //Aquí hacemos la comprobación de que de la athorización de que existe el metodo
        if (!this.authorize) {
          throw new Error('Person subclass has not implementation for the authorize method')
        }
    }

    //  COMENTAMOS EL CODIGO QUE NO VAMOS A UTILZIAR AQUI
    // authorize(id) {
    //     if (this.type) { 
    //       // Esto es una clara violación del Open-Closed principle
    //       if (this.type === 'Student') {
    //         return this.academicId = id;
    //       } else if (this.type === 'Employee') {
    //         return this.employeeId == id
    //       } else if (this.type === 'Professor') {
    //         return this.professorId == id
    //       }

    //     } else {
    //         throw new  Error('The type is not defined');
    //     }
    // }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }
}

class Student extends Person {
  constructor (academicId, firstName, lastName, age) {
      super(firstName, lastName, age);
      this.academicId = academicId;
  }

  authorize(id) {
    return this.academicId = id;
  }

}

class Employee extends Person {
  constructor (employeeId, firstName, lastName, age) {
      super(firstName, lastName, age);
      this.employeeId = employeeId;
  }

  authorize(id) {
    return this.employeeId = id;
  }
}

let employee = new Employee(123, 'Luis', 'del Amo', 34);