// Arrow functions allow us to write shorter function syntax:

hello1 = function() {
    return "Hello World!";
  }

hello2 = () => {
    return "Hello World!";
  }

  hello3 = () => "Hello World!";


  hello4 = (val) => "Hello " + val;

  console.log(hello1())
  console.log(hello2())
  console.log(hello3())
  console.log(hello4("world"))