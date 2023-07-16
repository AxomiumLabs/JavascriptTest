// const calculate=(a,b)=>{
//     let add=a+b;
//     let sub=a-b;
//     let mul=a*b;
//     let div=a/b;
//     return [add,sub,mul,div]
// }

// let [add,sub,mul,div]=calculate(8,2);
// console.log(add,sub,mul,div)


// obj1={
//     "name":"afna",
//     "age":22
// }
// let {name,age}=obj1;
// console.log(name)
// console.log(age)
// const greet=({name,age})=>{
//         // let name=obj.name;
//         // let age=obj.age
//          console.log(`my name is:${name},my age is ${age}`);

// }

// const greet1=(obj)=>{
//     // let name=obj.name;
//     // let age=obj.age
//      console.log(`my name is:${obj.name},my age is ${obj.age}`);

// }

// greet(obj1)
// greet1(obj1)

// function test(){
//        return "hello world..!"
// }
// const test1=function(){
//           return "hello test 1"
// }
const test2=(arg)=>{
    let x=3;
    return "hello test2  "+arg;
}
const test3=(arg)=>"hello test3   "+arg;
console.log(test2(1))
console.log(test3(4))


let x=5
console.log(x>10?true:false)
const fruits=["mango","apple","orange"]
fruits.push("olive")
console.log(fruits)
const fruits1=fruits.map((val)=>{
    if (val=="apple"){
        val="kiwi"
    }
    // console.log(val)
    return val
})
console.log(fruits1)

let date=Date()
console.log(date)

