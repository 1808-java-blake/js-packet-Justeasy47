/*Javascript Homework
Due Monday COB
Put all homework in:
github classroom created for you
-----------------------------------------------------------------------------------
PART I

Create a single Javascript file called packet.js to answer these questions.
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------

1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
function*/

function fibbonacci(n,memo) {
	memo = memo || {};

	if (memo[n]) return memo[n];
	if(n<1) return 1;

	return memo[n] = fibbonacci(n - 1, memo) + fibbonacci(n - 2, memo);

}

console.log("Question #1: ");
console.log(fibbonacci(10));

/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/

let numArray = [8, 6, 5, 10, 3, 2, 7, 1, 9, 4];

function swap(numArray, i, j) {
	   let temp = numArray[i];
	numArray[i] = numArray[j];
	numArray[j] = temp; 
}

function bubbleSort(numArray) {
	let swapped;
	do {
		swapped = false;
		for(let i = 0; i < numArray.length; i++) {
			if(numArray[i] && numArray[i + 1] && numArray[i] > numArray[i+1]) {
				swap(numArray, i, i + 1);
				swapped = true;
			}
		}
	} while(swapped);
	return numArray;
}

console.log("Question #2: ")
console.log(bubbleSort(numArray));

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/



function reverseStr(str) {
	
	if (str === "")
		return "";
	else
		return reverseStr(str.substr(1)) + str.charAt(0);
}

console.log("Question #3: ");
console.log(reverseStr("Recursion"));



/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/

let factorial = function(someNum) {

	if (someNum <= 0) {
		return 1;
	} else {
		return (someNum * factorial(someNum - 1));
	}
};

console.log(factorial(10));

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.

substring('hello world', 4, 3) // lo wo
substring('incorrect', 6, 2) // correct  offet  = 2, so start at index 2, end at offset + length so end at index 2 + 7 = 9

*/

function substring(someStr, length, offset) {
	let str = "";

	if(offset > someStr.length || offset < 0) {
		alert("Selection not within the index.");
		return;
	}

	if(length + offset > someStr.length) {
		alert("To long. Try again.");
		return;
	}

	for(let i = offset; i< length+offset; i++) {
		str += someStr[i];
	}

	return str;		
}

console.log(substring('Hello World', 4, 3));
//console.log(substring('Incorrect', 10, 2));
console.log(substring('Incorrect', 4, -1));

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum) {
	if (someNum === 0)
	  return "Number is even";

	else if (someNum === 1)
	  return "Number is odd";

	else if (someNum < 0)
	  return isEven(-someNum);
	else
	  return isEven(someNum - 2);
  }

  console.log(isEven(50));
  console.log(isEven(47));

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/


  
function isPalindrome(someStr) {

	let regex = /[\W_]/g;
  
	let lowRegStr = someStr.toLowerCase().replace(regex, '');
  
	let reverseStr = lowRegStr.split('').reverse().join(''); 
  
	if (reverseStr === lowRegStr)
		return true;

	else
		return false;
}
  
console.log(isPalindrome("Yo, banana boy"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("Not a Palindrome"));

/*8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  *
*/

function printShape(shape, height, character) {

	if (shape === "Square") {

		for (let i = 0; i < height; i++) {
			let row = ' ';

    	for (j = 0; j < height; j++) {
			row += character;
		}
		
		console.log(row)

		}
	}

	if (shape === "Triangle") {

		for (let i = 1; i <= height; i++) {
			let row = ' ';

		for (let j =1; j <= i; j++) {
			row += character;
		}

		console.log(row)

		}
	}
	
	if (shape === "Diamond") {

		for(let i = 1; i <= height; i++){
			let row = "";

			for(let j = i; j < (height * 2); j++){
			  row += " ";
			}

			for(let k = 0; k < (i * 2) - 1; k++){
			  row += character;
			}

			console.log(row);

		  }
		  let row = "";
		  for(i = height - 1; i >= 1; i--) {
			let row = "";

			for(let j = i; j < (height * 2); j++) {
			  row += " ";
			}
			for(let k = 0; k < (i * 2) - 1; k++) {
			  row += character;
			}
			console.log(row);
		  }
	}

}

printShape("Square",5,'%');
console.log("");
printShape("Triangle",5,'$');
console.log("");
printShape("Diamond",5,'%');

/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.*/
function traverseObject(someObj) {

	console.log("Animals to feet")

	for (let property in someObj) {
		
		console.log(property + " ---> " + someObj[property]);
	}
}

traverseObject({"Dog" : "Paws", "Bird" : "Claws", "Fish" : "Fins"});
/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

function deleteElement(someArr){
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	console.log(array);
	console.log(array.length);

	delete array[2];

	console.log(array.length);
	console.log(array);
}

deleteElement();

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/

function spliceElement(someArr) {
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	
		console.log(array);
		console.log(array.length);
	
		let removed = array.splice(2,1);
	
		console.log("Third element removed!")
		console.log(array.length);
		console.log(array);
	}
	
spliceElement();

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/

function Person(name, age) {

	this.name = name;
	this.age = age;

}

let john = new Person("John", 30);
console.log(john);

/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30);*/
 
 function getPerson(name, age) {

	let person = {firstName:name, age:age};

 }
 
 var john = getPerson("John", 30);
 console.log(john)
 
/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
Please put the question itself as a comment above each answer.

-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.*/



/*2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.*/
  
/*3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>*/
  
/*4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.*/
  
/*5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.*/

/*6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>*/

/*Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element*/

/*7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.*/

/*8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor*/

/*9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.*/

/*10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.*/

/*11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.*/

/*12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).*/


