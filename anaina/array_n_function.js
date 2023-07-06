// function and array
function myFunction(a) {
    var x=a+" "+"world...!";
    return x;
  }
  console.log(myFunction("abc"))
  console.log(myFunction("hello"))

  var arr=["ab",23];
  console.log(arr)

  var arr2=[[1,2,"abc"],[3,4,"def"]];
  console.log(arr2)

  arr[0]='xy';
  console.log(arr2[1][0])

  arr.push(["cd",65])
  console.log(arr)
   
   arr.pop()
  console.log(arr)

  arr.push(["cd",65])
  console.log(arr)

arr.shift()
  console.log(arr)
   


