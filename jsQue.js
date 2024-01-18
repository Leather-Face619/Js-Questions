// prog for remove all negative elements 
var arr = [4, 2, -6, 21, -8, 10, -13, 8, 9, -55, 78, 99, 44, -78, 69]
var clu = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
clu++}

}
 for (let j = 0; j < clu; j++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
          arr.splice(i,1)
        };

    }

}
console.log(arr);
//Remove all elem which are younger then 20
var obj = [
{name:"arvi", age: 20, alive:true},
{name:"ravi", age: 43, alive:true},
{name:"sami", age:54, alive:true},
{name:"hitler", age: 154, alive:false},
{name:"stalin", age: 107, alive:false},
{name:"navi", age: 12, alive:true},
{name:"harsh", age: 17, alive:true},]

var obj2 = obj.filter((e) => { 
   
    return e.age > 20
 })
