//! 1. Write a program to find square and cube of a given number.

// function squareAndCube(num) {
//   let square = num * num;
//   let cube = num * num * num;

//   return { square, cube };
// }

// let value = squareAndCube(10);
// console.log(value);

//! 2. Write a program to check if a given year is a leap year or not.

// let leapYear = function (year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     return "Leap Year";
//   } else {
//     return "Not Leap Year";
//   }
// };

// console.log(leapYear(1900));

//! 3. Write a program to calculate the sum of the first 100 natural numbers.

// let num = 100;
// let sum = (num * (num + 1)) / 2;
// console.log(sum);

//! 4. Write a program to check if a given number is even or odd.

// let num = 10;

// function evenOdd(num) {
//   if (num % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(evenOdd(num));

//! 5. Write a program to print the sum of all even numbers from 1 to any given number.

// let num = 50;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//! 6. Write a program to print the sum of all odd numbers from 1 to any given number.

// let num = 50;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log(sum);

//! 7. Write a program to count the number of digits in a given number.

// let num = 12345;
// let ct = 0;

// while (num > 0) {
//   ct++;
//   num = Math.floor(num / 10);
// }
// console.log(ct);

//! 8. Write a program to calculate the sum of the digits of a given number.

// let num = 12345;
// let digitSum = 0;

// while (num > 0) {
//   digitSum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(digitSum);

//! 9. Write a program to print the multiplication table of a given number.

// let num = 18;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

//! 10. Write a program to reverse a given number. For example, if the input is 12345, the output should be 54321.

// let input = 12345;
// let output = 0;

// while (input > 0) {
//   let last = input % 10;
//   output = output * 10 + last;
//   input = Math.floor(input / 10);
// }
// console.log(output);

//! 11. Write a program that prints the numbers from 1 to 100. But for multiples of three, print 'Fizz' instead of the number, and for multiples of five, print 'Buzz.' For numbers that are multiples of both three and five, print 'FizzBuzz.'

// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//! 12. Write a program to calculate the power of a number without using the Math.pow() function.

// let num = 10;
// let raise = 2;
// let power = 1;

// for (let i = 0; i < raise; i++) {
//   power *= num;
// }
// console.log(power);

//! 13. Write a program to check if a given number is prime or not.

// let num = 45;
// let den = 2;

// while (true) {
//   if (num % den == 0) {
//     break;
//   }
//   den++;
// }

// if (num == den) {
//   console.log("It is a Prime Number.");
// } else {
//   console.log("It is not a Prime Number.");
// }

//! 14. Write a program to find and print all the prime numbers within 1-100.

// function isPrime(num) {
//   let den = 2;

//   if (num <= 1) {
//     return false;
//   }

//   while (true) {
//     if (num % den == 0) {
//       break;
//     }
//     den++;
//   }

//   if (num == den) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let start = 1;
// let end = 100;
// let den = 2;

// while (start <= end) {
//   if (isPrime(start)) {
//     console.log(start);
//   }
//   start++;
// }

//! 15. Write a program to calculate the factorial of a given number.

// let num = 5;
// let factorial = 1;

// for (let i = num; i >= 1; i--) {
//   factorial *= i;
// }

// console.log(factorial);

//! 16. Write a program to print the Fibonacci series up to a given number.

// let n1 = 0;
// let n2 = 1;
// let n3;

// let num = 50;

// console.log(n1);
// console.log(n2);

// while (n2 < num) {
//   n3 = n1 + n2;
//   console.log(n3);
//   n1 = n2;
//   n2 = n3;
// }

//! 17. Write a program to calculate the sum of the first 20 Fibonacci numbers.

// let n1 = 0;
// let n2 = 1;
// let n3;

// let sum = 0;
// let ct = 0;

// while (ct < 20) {
//   if (ct == 0) {
//     sum += n1;
//   } else if (ct == 1) {
//     sum += n2;
//   } else {
//     n3 = n1 + n2;
//     console.log(n3);
//     sum += n3;
//     n1 = n2;
//     n2 = n3;
//   }
//   ct++;
// }

// console.log("Sum of first 20 Fibonacci numbers: " + sum);

//! 18. Write a program to check if a given number is a perfect number.

// let num = 10;

// let sum = 0;

// let den = 1;
// while (den < num) {
//   if (num % den == 0) {
//     sum += den;
//   }
//   den++;
// }

// console.log(sum);
// if (num == sum) {
//   console.log("Perfect Number");
// } else {
//   console.log("Not Perfect Number");
// }

//! 19. Write a program to check if a given number is an Armstrong number.

// let num = 153;
// let sum = 0;

// function cube(num) {
//   return num * num * num;
// }

// let temp = num;
// while (temp > 0) {
//   let last = temp % 10;
//   sum += cube(last);
//   temp = Math.floor(temp / 10);
// }

// console.log(sum);

// if (num == sum) {
//   console.log("ArmStrong Number");
// } else {
//   console.log("Not ArmStrong Number");
// }

//! 20. Write a program to check if a given number is a strong number.

// let num = 145;

// function factorial(num) {
//   let fact = 1;

//   for (let i = num; i >= 1; i--) {
//     fact *= i;
//   }

//   return fact;
// }

// let sum = 0;
// let temp = num;
// while (temp > 0) {
//   let last = temp % 10;
//   sum += factorial(last);
//   temp = Math.floor(temp / 10);
// }

// console.log(sum);

// if (num == sum) {
//   console.log("Strong Number");
// } else {
//   console.log("Not Strong Number");
// }

//! 21. Write a program to check a number whose last digit is 7.

// let num = 227;

// let last = num % 10;

// if (last == 7) {
//   console.log("Last digit is 7");
// } else {
//   console.log("Last digit is not 7");
// }

//! 22. Print the number which ends with 7 or is divided by 7.

// let num = 17;

// let last = num % 10;

// if (num % 7 == 0 || last == 7) {
//   console.log("Seven");
// } else {
//   console.log("Not divisible by 7 & last digit is not 7");
// }

//! 23. Print numbers up to 500 that are divided by 7 and end with 7.

// let num = 500;

// for (let i = 1; i <= num; i++) {
//   let last = i % 10;

//   if (i % 7 == 0 || last == 7) {
//     console.log(i);
//   }
// }

//! 24. Write a program to print the factors of a number and also print the number of factors of that number.

let num = 100;
let ct = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    ct++;
    console.log(i);
  }
}

console.log(`Total Factor count: ${ct}`);
