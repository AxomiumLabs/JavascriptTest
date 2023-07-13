// class Student{  
//     constructor(name, age){  
//     this.name = name;  
//     this.age = age;  
//     }  
//     student1() {   
//         console.log(" Name : ", this.name)   
//         console.log(" Age : ",this. age)   
//      }
// }  

// var std1 = new Student('Peter', 22)  
// std1.student1()


//.........................................................

class Animal {
    constructor(name) {
      this.name = name;
    }
    
    greet() {
        console.log( `Hello, my name is ${this.name}`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed) {
      super(name)
      this.breed = breed
    }
    
    purr() {
        console.log( 'purrrrr')
    }
  }
  
  const nora = new Cat('Nora', 'tabby')
  nora.greet()
  nora.purr()

  const ragu = new Cat('ragu', 'Ragdoll')
  ragu.greet()