var arr=[];
var i=0;
while(i<5){
    arr.push(i+2);
    i++;
}
console.log(arr)


var arr1=[];
for(var i=0;i<5;i++){
    arr1.push(i)
}
console.log(arr1)


function multiplly(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product*=arr[i][j];
        }
    }
    return product;
}
var arr3=[[1,2,3],[4,5,6],[1,6]]
var pro=multiplly(arr3);
console.log(pro);



var arr4=[];
var i=10;
do{
    arr4.push(i)
    i--;
}while(i>5)
console.log(arr4)