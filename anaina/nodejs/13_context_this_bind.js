// const noraTheCat = {
//   name: 'Nora',
//   color: 'orange',
//   whatsMyName: function () {
//     console.log(this.name)
//   }
// }

// noraTheCat.whatsMyName() 
// .................................................
// method bind() to make sure this is what you want it to be in a function scope
// object can borrow a method from another object.


// function doTwice (func) {
//   func()
//   func()
// }

// const noraTheCat = {
//   name: 'Nora',
//   color: 'orange',
//   whatsMyName: function () {//not global function
//     console.log(this.name)
//   }
// }

// doTwice(noraTheCat.whatsMyName.bind(noraTheCat))

//...............................................................

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName())