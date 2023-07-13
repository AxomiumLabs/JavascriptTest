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


  //................................................

function greet (string) {
  string = string.toUpperCase() + "!!!"
  console.log(string)
}

greet('Good Morning...!')

const yell = function (string) {
  string = string.toUpperCase() + '!'
  console.log(string)
}
yell('Good Afternoon')
//arrow
const whisper = (string) => string.toLowerCase() + '.'
console.log(whisper('GOOD MORNING..!'))

const insideVoices = (string) => {
  string = string.toLowerCase() + '.'
  return string
}
console.log(insideVoices('GOOD AFTERNOON....!'))
