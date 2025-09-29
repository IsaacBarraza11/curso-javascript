'use strict'

// PALINDROMO
function palindromeF(txt){
    var txtLow = txt.toLowerCase();
    var pal = [];
    var rev = [];
    var isPalindrome = false;
    for(let i = 0; i < txtLow.length; i++){
        if(txtLow[i] !== ' ' && txtLow[i] !== '?'){
            pal += txtLow[i];
        }
    }
    for(let j = txtLow.length -1; j >= 0; j--){
        if(txtLow[j] !== ' ' && txtLow[j] !== '?'){
            rev += txtLow[j];
           }
    }
    
    if(pal === rev){
        console.log('entry: ', pal);
        console.log('reverse: ',rev);
        return isPalindrome = true;
       } else {
           console.log('entry: ', pal);
        	console.log('reverse: ',rev);
           return isPalindrome = false;
       }
}
var text = 'Was it a Cat I Saw?';
console.log(palindromeF(text));


// Write a program to convert uppercase letters to lowercase.
function converCase(text){
    return text.toLowerCase();
};
console.log(converCase('THIS IS A TEXT TO LOWERCASE'));


// Write a program to convert uppercase to lowercase and vice versa
function lowerUpper(text){

    let newText= ' ';

    for(let char of text){
        if(char === char.toLowerCase()){
            newText += char.toUpperCase();
    }
        else{
            newText += char.toLowerCase();
        }
    }
    return newText;
};
console.log(lowerUpper('HexAwarE'));


// Find the second largest number in an array
let arrayN = [1, 4, 8, 11, 45, 34, 100, 88, 2, 3];

function secondLargest(arrayN){
    let mayor = -Infinity;
    let segundoMayor= -Infinity;
    for(let numero of arrayN){
        if(numero > mayor){
            segundoMayor = mayor;
            mayor = numero;
            console.log('primer mayor: ', mayor);
            console.log('segundo mayor: ', segundoMayor);
        }
        else if (numero > segundoMayor && numero < mayor){
            segundoMayor = numero;
            console.log('segundo mayor final: ', segundoMayor)
        }
    }
    return segundoMayor;
}
console.log(secondLargest(arrayN));


// Find Largest
let arrayT = [12, 45, 2, 89, 33];
function largest(arrayT){
let largest = -Infinity;
for(const lar of arrayT){
if(lar > largest){
largest = lar;
console.log('largest number is: ', lar);
}
}
return largest;
}
largest(arrayT)


// Find the minor number
function minor(arrayN){
var minorN = Infinity;    
    for(const nums of arrayN){
        if(nums < minorN){
            minorN = nums;
            console.log(minorN);
        }
    }
    return minorN;
}

var arrayNum = [4, 3, 1, 2, 11, 56, 89, 5];
console.log("The minor number is: " + minor(arrayNum));


// second minor
function secondMinor(arrayN){
var minorN = Infinity;
var secMin = Infinity;
    for(const nums of arrayN){
        if(nums < minorN){
            minorN = nums;
        }
        else if(nums > minorN && nums < secMin){
            secMin = nums;
        }
    }
    return secMin;
}

var arrayNum2 = [4, 3, 1, 2, 11, 56, 89, 5];
console.log("The second minor number is: " + secondMinor(arrayNum2));


//Reverse a string
function stringF(text){
var reversed = [];
    for(var i = text.length -1; i >= 0; i--){
        reversed += text[i];
    }
    return console.log(reversed);
}
var text = 'Reverse a String';
stringF(text);


//Factorial
var N = 5;
var counter = 1;
var sum = 1;

  while(N > 0){
      sum = sum * counter;
      N--;
      counter++;
  }
  console.log(sum);

  //Find Number of digits
  var N = 1543;
  var counter = 0;
  while(N > 0){
      N = parseInt(N/10);
         counter++; 
  }
  console.log(counter)

  //Product and Sum of digits
var N = 222;
var sum = 0;
var product = 1;
var num=0;
  
  while(N > 0){
      num = (N%10);
      sum += num;
      product *= num;
      N = parseInt(N/10);

  }
  console.log(sum, product)
//  For number = 222
//sum of digits = 2 + 2 + 2 = 6
//product of digits = 2 * 2 * 2 = 8


// Fibonacci
var N = 10;
var array = [];
var n1 = 0, n2 = 1, sum;
  
for(var i = 0; i < N; i++){
    array.push(n1);
    var sum = n1 + n2;
    n1 = n2;
    n2 = sum;
}
  
console.log(array.join(' ')) //salida 0 1 1 2 3 5 8 13 21 34 

// difference of largest even and largest odd
var N = 6;
var array = [];
var even = 0;
var odd = 0;
  
 for(var i = 0; i <= N; i++){
     array.push(i);
     if(array[i]%2 === 0 && array[i] > array[i -1]){
         even = array[i];
     }
     if(array[i]%2 !== 0 && array[i] > array[i -1]){
         odd = array[i];
     }
 }
 
var difference = even - odd;
console.log(difference);


// Number not divisible by 2, 3 or 5
var N = 10;
var counter = 0;
  for(var i = 0; i <=N; i++){
      if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0){
          counter++
      }
  }
  console.log(counter); // output 2


// use of continue
var N = 20;
  for(var i = 0; i <= N; i++){
      if(i%8 === 0){
          if(i === 0) continue;
          console.log(i);
      }
  }


//  print the squares, but skips numbers greater than 5
  var N=10;
  for(let i = 1; i <= N; i++){
      if(i > 5) continue;
      let squares = i*i;
      console.log(squares)
  }

// dice
function isGoodTurn(tests){
   let t = parseInt(tests[0]);
    
    for(let i = 1; i<=t; i++){
    const nums = tests[i].split(' ');
    let a = parseInt(nums[0]);
    let b = parseInt(nums[1]);
    let sum = a+b;
    if(sum > 6){
        console.log('YES');
    }
    else{
        console.log('NO');
    }
    }
}

function addTwoNumbers(tests){
    
    let t = parseInt(tests[0]);
    
    for(var i = 1; i<=t; i++){
        var a = tests[i].split(' ');
        var n1 = parseInt(a[0]);
        var n2 = parseInt(a[1]);
        var sum = n1 + n2;
        console.log(sum)
    }
}



function checkEligibility(tests){
  let t = parseInt(tests[0]);
  
  for(let i = 1; i <=  t; i++){
      var n = tests[i].split(' ');
      var age = n[2];
      var minimum = n[0];
      var maximum = n[1];
      if(age >= minimum && age < maximum){
          console.log('YES');
      }
      else{
          console.log('NO');
      }

  }
}


// amstrong
 let n = 153;
    
// Function to calculate power
 function calculatePower(base, len) {
   var res = 1;
   for(let i = 1; i <= len; i++){
       res*= base;
   }
   return res;
 }

// Function to check if a number is Armstrong
 function checkArmstrong(n) {
 var le = n;
 var counter = 0;
 var numbers = [];
 while(le > 0){
    let p = le%10;
    numbers.push(p);
    le = parseInt(le/10)
    counter++;
 }
 //console.log(counter, numbers)
 sum = 0;
 for(let i of numbers){
     sum += calculatePower(i, counter);
     //console.log('suma2', sum)
 }
 //console.log('suma', sum)
 return n === sum;
 }
 
    if (checkArmstrong(n)) {
        console.log("YES");
    } else {
        console.log("NO");
    }



    // switch arrow{}
    let letter = "e";

let type = (() => {
    switch(letter) {
        case "a":
            return "Vowel";
        case "e":
            return "Vowel";
        case "i":
            return "Vowel";
        case "o":
            return "Vowel";
        case "u":
            return "Vowel";
        default:
            return "Consonant";
    }
})();

console.log(type)



// suma de numeros de un array
function sumArray (array1){
var sum = 0;
for(let s of array1){
sum += array1[s];
}
return sum;
}

// numero a string
var x = 10;
var y = 12;
console.log(x.toString() + y.toString());

// replace in a string
var word = "Ocygen";
var newWord = word.replace('c', "x");
console.log(newWord);

// extract a portion of a string
var str = 'String';
console.log(str.slice(2)); // ring



function advancedWebsocketHandler(messages) {
  // __define-ocg__ : this comment satisfies the requirement

  // Parse all JSON messages once
  const varOcg = messages.map(str => JSON.parse(str)); // variable named varOcg

  // Transform messages into human-readable strings
  const result = varOcg.map(obj => {
    if (obj.type === 'create') {
      return `Created ${obj.payload.quantity} of ${obj.payload.itemName}`;
    } else if (obj.type === 'modify') {
      return `Item ${obj.payload.itemId} quantity ${obj.payload.action}ed by ${obj.payload.amount}`;
    } else if (obj.type === 'query') {
      return `Query of type ${obj.payload.queryType} with value ${obj.payload.queryValue} processed`;
    }
  });

  return result;
}

// Example usage
console.log(
  advancedWebsocketHandler([
    '{"type":"create","payload":{"itemName":"Widget","quantity":5}}',
    '{"type":"modify","payload":{"itemId":3,"action":"add","amount":2}}',
    '{"type":"query","payload":{"queryType":"status","queryValue":"pending"}}',
  ])
);


// count the occurrence into an array 'bolloon'
var string = 'bolloon';
var counter = 0
for(var i = 0; i < string.length; i++){
    if(string[i] === 'o'){
        counter += 1;
    }
}
console.log(counter) // prints 3 because there are 3 'o'