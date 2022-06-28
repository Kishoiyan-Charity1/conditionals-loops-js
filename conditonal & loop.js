// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (var x=1; x<100; x++){
    if (x %3==0 && x%5==0) {console.log("FizzBuzz");}
    else if (x % 3 ==0 ) {console.log("Fizz");}
    else if (x % 5==0) {console.log("Buzz");}
    else console.log(x);

}
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var addition =0;
for (var x = 0; x < 1000; x++){
    if (x % 3 === 0 || x % 5 === 0){
        addition += x;
    }
}
console.log(addition);

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (var y=0; y<=20; y++) {
    if (y === 0) {
            console.log(y +  " is even");
    }
    else if (y % 2 === 0) {
            console.log(y + " is even");   
    }
    else {
            console.log(y + " is odd");
    }
}

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
let num = [-2, 4, -5, 6, 0];
num2= num.sort()
largest= num2.pop()
console.log(largest)


// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let number= [10,40];
num= number.sort()
large=num.pop()
console.log(large)


// Write a JavaScript program to find leap years from 2000 to 2022
function leap_year_range(first_year, last_year){
var year_range = [];
        for (var i = first_year; i <= last_year; i++)
        {
             year_range.push(i);
        }
        var new_array = [];

  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    });

  return new_array;
     }

function test_LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

console.log(leap_year_range(2000,2022));