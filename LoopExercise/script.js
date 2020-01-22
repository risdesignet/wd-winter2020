///exercise 1:
///add 1 to the counter every time the funciton is called
///console.log your counter variable

var counter1 = 0;
function ourCounter() {
  // counter1 = counter1 + 1;
  // counter1 += 1;
  counter1++;
  ///your code here
  console.log(counter1++);
}



///exercise 2: fill the array with ten numbers. print the numbers in the console
///create a button in your html to call the function testing()
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function testing() {

    ///write a for loop that iterates over your array and for each step console.log the number
    for(var i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
}


// exercise 3: declare a variable called counter2
// add 5 to the counter every time the function is called
// assign the variable to the font size
// create a button in your html to call the function
var counter2 = 10;

function fontSize (){
    ///add to the counter
    counter2 += 5;
    console.log("The fontsize is " + counter2);
    document.getElementById("header").style.fontSize = counter2 + "px";
    //assign the counters value here
}

console.log("Script is connected");
