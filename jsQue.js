// prog for remove all negative elements 
var arr = [4, 2, -6, 21, -8, 10, -13, 8, 9, -55, 78, 99, 44, -78, 69]
var clu = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        clu++
    }

}
for (let j = 0; j < clu; j++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.splice(i, 1)
        }
    }
}
console.log(arr);

//Remove all elem which are younger then 20
var obj = [
    { name: "arvi", age: 20, alive: true, gender: "male" },
    { name: "ravi", age: 43, alive: true, gender: "male" },
    { name: "sami", age: 54, alive: true, gender: "male" },
    { name: "hitler", age: 154, alive: false, gender: "chad male" },
    { name: "stalin", age: 107, alive: false, gender: "chad male" },
    { name: "navi", age: 12, alive: true, gender: "female" },
    { name: "harshi", age: 17, alive: true, gender: "female" },]

var obj2 = obj.filter((e) => {

    return e.age > 20
})

// ak string hai uske har ak word ko reverse karo ro fir se join kar ke do..
var str = "Hello Arvind Bhai kaise ho..."
var newArray = str.split(" ").map((elem) => { return elem.split("").reverse().join("") })
newStr = newArray.join(" ")
console.log(newStr);

// how to Empty an Array in js 
var nn = [123, 46, 232, 13, 134, 575, 2324]
nn.length = 0

// Check number is Integer or not Without using .isInteger()
var kj = 325
if (kj % 1 == 0) {
    console.warn("Integer");
} else {
    console.warn("Not");
}
// doo([1,2,3]) //ot-> [1,2,3,1,2,3]
function doo(params) {
    return params.concat(params);
}
// console.log(doo([4,2,5]));

//write a func to reverse a number
function reverse(params) {
    var p2 = params.toString().split("").reverse().join("")
    return Number(p2)
}
// console.log(reverse(54));
/*Another way to solve this*/
function reversekaro(num) {
    var reverse = 0
    while (num > 0) {
        let reminder = num % 10;
        reverse = reverse * 10 + reminder
        num = Math.floor(num / 10)
    }
    return reverse
}
// console.log(reversekaro(2734928));

// check Given string is a palindrome or not

var checkKar = (str) => {
    let rev = str.split("").reverse().join("")
    str == rev ? console.log("Yes") : console.log("no")
}
// checkKar("poafop")

// arrange string in alphabetical order 

var alpha = (str) => {
    return str.split("").sort().join("")
}
//  console.log(alpha("Arvind"));

// uppercase 1st letter of the string 
var up = (str) => {

    let ans = str.split(" ").map((e) => {
        return e.charAt(0).toUpperCase() + e.substring(1)
    })
    return ans.join(" ")
}
//  console.log(up("arvind kaise ho?"));

//string ke har ak alphabet ko count karo ki vo kitne baar aaya.
var occ = (elem) => {
    var occurrence = {}
    elem.split("").forEach(element => {
        occurrence.hasOwnProperty(element) == true ? occurrence[element]++ : occurrence[element] = 1
    });
    return occurrence
}
//  console.log(occ("aaabbccccdd"));

//Add all number array elements 
var add = (e) => {
    let sum = 0
    // e.forEach(element => {
    //     sum+= element
    // });
    // return sum
    /*  using map */
    e.map((elem) => {
        sum += elem
    })
    return sum
}
//    console.log(add([10,20,55]));

// In a Array fo numbers and Strings only add numbers 
var nu = (e) => {
    var su = 0; // Move the declaration outside of the loop
    e.forEach(elem => {
        if (typeof (elem) == 'number') {
            su += elem;
        }
    });
    return (su);
}
// console.log(nu([2,"asdada","sgs","ioa",3,"adasd",6]));

//Array of objects remove non male elements 
/*var re = (e) => {
    return an = e.filter((ale) => {
        return ale.gender == "male"
    })
}
 console.log(re(obj)); */
//Another way to solve this 
var re = (e) => {
    var count = 0
    e.forEach(element => {
        if (element.gender !== 'male') count++
    })
    for (let j = 1; j <= count; j++) {
        for (let i = 0; i < e.length; i++) {
            if (e[i].gender !== 'male') {
                newobj.splice(i, 1)
            }
        }
    }
    return newobj

}
var newobj = [...obj]
//console.log(re(newobj)); 

// // Clone Array
/* var clo = (e) => { return e.map((ale) => { return ale }) }
 var newarr= clo(arr)
 console.log(newarr);*/
//Another way 
var newarr = [...arr]
// console.log("sdadasd "+newarr);

//type batani hai 
function tt(params) {
    return typeof params
}
//  console.log(tt(true));

// ak func banao jo array ko print kare or by default vo 1 baar print kare 
function pri(arr, n = 1) {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[i]);
        }

    } else console.log(`${n} itne to elements hi nahi hai`);
}
// pri([3,5,8,1],3)

// ak func banao jo array ko reverse se print kare or by default vo 1 baar print kare 
function repri(arr, n = 1) {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[arr.length - 1 - i]);
        }

    } else console.log(`${n} itne to elements hi nahi hai`);
}
// repri([3,5,8,11],2)

//print most repeated number or biggest num

function freq(arr) {
    var freq = {}
    arr.forEach(element => {
        if (freq.hasOwnProperty(element)) {
            freq[element]++
        }
        else freq[element] = 1
    });
    var mostfreq = Object.keys(freq).reduce((acc, curr) => {
        return freq[acc] > freq[curr] ? acc : curr
    })
    console.log(mostfreq);
}
// freq([2,6,7,8,4,5,4])

// Suffle Array numbers 
function suffleKaro(arr) {
    var totalArea = arr.length
    while (totalArea > 0) {

        totalArea--
        var indextobechanged = Math.floor(Math.random() * totalArea)

        let temp = arr[totalArea]
        arr[totalArea] = arr[indextobechanged]
        arr[indextobechanged] = temp
    }
    return arr

}
// console.log(suffleKaro([3,4,5,6,7,8,9,10]));
//
function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))]
}
// console.log(union([2,3,46,6,2],[3,4,5,7,5]));
