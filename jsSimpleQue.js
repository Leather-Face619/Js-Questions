
//Accept the Gender and Generate ot at the basis of Gender
function wel(ob) {
    if (ob.gender == "male") {
        console.log("Hello Sir")
    } else if (ob.gender == "female") {

        console.log("Hello Mam")

    }
    else {
        console.log("Hello ")
    }
}
// wel(obj[5])
//write a program to check given char is vowel or not 
var st = "o"
var vo = "AEIOUaeiou"
// Check if st is a vowel
if (vo.includes(st)) {
    console.log(st + " is a vowel");
} else {
    console.log(st + " is not a vowel");
}
//write a prog to take number and print its table upto the given number  if number is less then 10 then print table upto 10 
var table = (num) => {
    if (num <= 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(num + " X " + i + " = " + num * i);

        }
    }
    else {
        for (let i = 1; i <= num; i++) {
            console.log(num + " X " + i + " = " + num * i);

        }
    }

}
// table(4)

//sum upto given n numbers
var sum = (n) => {
    var count =0
    for (let i = 1; i <= n; i++) {
    count = count +i
}
console.log(count);
}
// sum(4)

//fact upto given n numbers
var fact = (n) => {
    var count = 1
    for (let i = 1; i <= n; i++) {
    count = count *i
}
console.log(count);
}
// fact(5)
//print factors 
var factors = (num)=>{
for (let i = 1; i <= num; i++) {
   if (num%i==0) {
    console.log(i);
   }
    }
}
// factors(12)
//find  print strong num 
function strongNum(num) {
    su= 0 ;
    for (let i = 1; i < num; i++) {
        if (num%i == 0) {
         su += i  
        }
}
    if (su == num) {
        console.log("yes this is a Strong num")
    }
    else{
        console.log(" this  is not a Strong num")
}
}
// strongNum(6)
//write a program to check prime number 
function prime(num) {
    count = 0
    for (let i = 1; i <= num; i++) {
        if (num%i==0) {
            count+=1
        }}
        if (count==2) {
            console.log("prime number");
        }
        else{ 
            console.log("composite number");}
    }
    // prime(11)
   // seprate each digit of a number and print it without converting num in to string 
    function sep(num) {
        var deg
        while (num > 0 ) {
            deg = num%10
            console.log(deg);
           
            num = Math.floor(num/10)
          
        }
    }
     sep(652)
