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
        }}}
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

// ak string hai uske har ak word ko reverse karo ro fir se join kar ke do..
var str = "Hello Arvind Bhai kaise ho..."
var newArray = str.split(" ").map((elem) => { return elem.split("").reverse().join("") })
newStr = newArray.join(" ")
console.log(newStr);

// how to Empty an Array in js 
var nn = [123,46,232,13,134,575,2324]
nn.length = 0

// Check number is Integer or not Without using .isInteger()
var kj = 325
if (kj%1 == 0) {
    console.warn("Integer");
} else {
    console.warn("Not");
}
// doo([1,2,3]) //ot-> [1,2,3,1,2,3]
function doo(params) {
   return params.concat(params);
}
console.log(doo([4,2,5]));

//write a func to reverse a number
function reverse(params) {
   var p2 =  params.toString().split("").reverse().join("")
    return  Number(p2)
}
console.log(reverse(54));
/*Another way to solve this*/
function reversekaro(num)   {
    var reverse = 0
    while (num>0) {
        let reminder = num%10;
         reverse = reverse*10+reminder
        num = Math.floor(num/10)
    } 
    return reverse
}
console.log(reversekaro(2734928));

// check Given string is a palindrome or not

var checkKar = (str) => {
    let rev =  str.split("").reverse().join("")
str==rev? console.log("Yes"):console.log("no")}
console.log(checkKar("poop"));

// arrange string in alphabetical order 

var alpha = (str) => { 
    return str.split("").sort().join("")
 } 
 console.log(alpha("Arvind"));

 // uppercase 1st letter of the string 
 var up = (str) => { 

 let ans = str.split(" ").map((e) => { 
    return e.charAt(0).toUpperCase() + e.substring(1)
})
return  ans.join(" ")
 }
 console.log(up("arvind kaise ho?"));

 //string ke har ak alphabet ko count karo ki vo kitne baar aaya.
var oc = (elem) => { 
    var occurrence = {}
    elem.split("").forEach(element  => {
        occurrence.hasOwnProperty(element) == true ? occurrence[element]++ : occurrence[element] =1 
    });
    return occurrence
 }
 console.log(oc("aaabbccccdd"));