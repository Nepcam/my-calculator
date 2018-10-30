/*
Checklist
1. user selects number, display the number 
2. then user select the operator
3. clear screen and display the selects number, and calculate
4. display the answer
*/

var screenDisplay ="";
var temp = "";
var calculation = "";

//user clicks on the number selected
function clickNum(i){ 
  checkForNewCalculation();
  checkNumberSize();
  checkNumberDecimal(i);
  displayNum(i);
  }

//user select number, display on screen  
function displayNum(i){
  document.getElementById("screen").value += i ;
  temp += i;
  }

//make sure number doesn't go over 15digits
function checkNumberSize(){
  screenDisplay = document.getElementById("screen").value;
  if(screenDisplay.length>15){
      stop();
  }
}

//check number for decimal points
function checkNumberDecimal(i){
  screenDisplay = document.getElementById("screen").value;
  if (i == "." && screenDisplay.includes(".")){
      stop();
  }
}


//2nd user input
function checkForNewCalculation(){
  screenDisplay = document.getElementById("screen").value;
  if (document.getElementById("screen").classList.contains("result")){
      allClear();
      document.getElementById("screen").classList.remove("result");
  };
}

//clear screen / last input
function clearScreen(){
  screenDisplay = "";
  document.getElementById("screen").value = screenDisplay;
}

//full screen clear
function allClear(){
  screenDisplay = "";
  document.getElementById("screen").value = screenDisplay;
  temp ="";
}

//CE button
function cancelLastEntry(){
  screenDisplay = document.getElementById("screen").value;
  if (screenDisplay == ""){
      temp = temp.slice(0, -1);
  }
  else {
      clearScreen();
      temp = temp.slice(0, -screenDisplay.length);
  }
}

//do the math
function maths(i){
  screenDisplay =document.getElementById("screen");
  if (document.getElementById("screen").classList.contains("result")){
      temp = screenDisplay.value;
      screenDisplay.classList.remove("result");
  };
  clearScreen();
  temp += i;
  document.getElementById("operator-in-use").innerHTML = i;
}

//soloution to problem and display 
function equal(){
  screenDisplay = document.getElementById("screen");
  temp = eval(temp);
  document.getElementById("screen").value = temp;
  screenDisplay.classList.add("result");
}


function stop(){
  screenDisplay = document.getElementById("screen");
  screenDisplay.classList.add("error");
  setTimeout(function(){
      screenDisplay.classList.remove("error");
  }, 1000);
}
